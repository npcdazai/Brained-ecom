import { Badge, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from 'react-redux';
import BrainedLogo from "../../../public/brained.svg";
import Bag from "../../assets/icons/Rectangle.svg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <VStack boxShadow="sm" zIndex={100} position="sticky" top="0" bgColor="white" color="#666666" w="100%" >
      <HStack bgColor="#333333" px={{ base: "1rem", md: "6rem" }} py={3} w="100%" justifyContent="space-between">
        <HStack cursor="pointer" ><CiLocationOn color="#B3B3B3" /> <Text as="span" fontSize={{ base: "xx-small", md: "x-small" }} color="#B3B3B3" >Store Location: Lincoln- 344, Illinois, Chicago, USA</Text></HStack>
      </HStack>
      <HStack w="100%" px={{ base: "1rem", md: "5rem" }} justifyContent="space-between" >
        <Box w={{ base: "83px", md: "auto" }} h={{ base: "50px", md: "84px" }} >
          <NavLink to="/" >
            <Image src={BrainedLogo} h="80%" w="100%" />
          </NavLink>
        </Box>

        <Flex align="center" gap={{ base: 2, md: 4 }}>

          <Flex align="center" position="relative" gap={2}>
            <Image src={Bag} h={{ base: "20px", md: "24px" }} />

            <Badge
              position="absolute"
              top="-5px"
              left="14px"
              bg="green.500"
              color="white"
              fontSize={{ base: "0.6rem", md: "0.75rem" }}
              px={{ base: "1", md: "2" }}
              borderRadius="full"
            >
              {totalQuantity}
            </Badge>
            <VStack ml={3} gap="-3px" alignItems="flex-start" display={{ base: "none", md: "flex" }} >
              <Text as="span" fontSize={{ base: "xx-small", md: "x-small" }} color="gray.600">Shopping cart:</Text>

              <Text as="span" fontSize={{ base: "small", md: "medium" }} fontWeight="semibold" color="black">
                ${totalAmount.toFixed(2)}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </HStack>
    </VStack >
  )
}

export default Header
