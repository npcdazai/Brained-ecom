import { Badge, Box, Button, Flex, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Heart from "../../assets/icons/Heart.svg";
import BrainedLogo from "../../../public/brained.svg";
import Bag from "../../assets/icons/Rectangle.svg";
import { InputGroup } from "../../components/ui/input-group";

const Header = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <VStack zIndex={100} position="sticky" top="0" bgColor="white" color="#666666" w="100%" >
      <HStack bgColor="#333333" px="6rem" py={3} w="100%" justifyContent="space-between">
        <HStack cursor="pointer" ><CiLocationOn color="#B3B3B3" /> <Text as="span" fontSize="x-small" color="#B3B3B3" >Store Location: Lincoln- 344, Illinois, Chicago, USA</Text></HStack>
        <HStack color="#B3B3B3" ><Text _hover={{ color: "blue", textDecoration: "underline" }} cursor="pointer" as="span" fontSize="x-small" >Sign in</Text> <Text as="span" fontSize="x-small" >/</Text> <Text as="span" fontSize="x-small" cursor="pointer" _hover={{ color: "blue", textDecoration: "underline" }}  >Sign Up</Text></HStack>
      </HStack>
      <HStack px="5rem"  w="100%"  justifyContent="space-between" >
        <Box w="auto" h="84px" ><Image  src={BrainedLogo} h="80%" w="100%" /></Box>
        <HStack w="28%" >
          <InputGroup
            flex="1"
            startElement={<IoSearchOutline />}
            endElement={<Button bgColor="#00B207" fontSize="xs" borderRadius="none" borderTopRightRadius="8px" borderBottomRightRadius="8px" color="#fff" >Search</Button>}
          >
            <Input w="90%" border="none" placeholder="Search" />
          </InputGroup>
        </HStack>

        <Flex align="center" gap={4}>
       


          {/* Shopping Cart */}
          <Flex align="center" position="relative" gap={2}>
            <Image src={Bag} h="24px" />

            <Badge
              position="absolute"
              top="-5px"
              left="14px"
              bg="green.500"
              color="white"
              fontSize="0.75rem"
              px="2"
              borderRadius="full"
            >
              {totalQuantity}
            </Badge>

            {/* Shopping Cart Text */}
            <VStack ml={3} gap="-3px" alignItems="flex-start" >
              <Text as="span" fontSize="x-small" color="gray.600">Shopping cart:</Text>

              {/* Total Price */}
              <Text as="span" fontSize="small" fontWeight="semibold" color="black">
                ${totalAmount.toFixed(2)}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </HStack>
    </VStack>
  )
}

export default Header
