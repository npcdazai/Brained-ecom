import React from 'react'
import BannerFruit from "../../assets/bg/bannerFruit.png"
import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const Banner = () => {
  return (
    <HStack w="100%" px={6} justifyContent="space-between"  flexDirection={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "left" }} >
      <Image src={BannerFruit}  maxW={{ base: "100%", md: "60%" }}  objectFit="cover"  />
      <VStack alignItems={{ base: "center", md: "flex-start" }} w="100%" gap={4} >
        <VStack  alignItems={{ base: "center", md: "flex-start" }}  gap="-1rem"  >
          <Text as="span" color="#00B207" fontSize={"md"} fontWeight={400} >Welcome to shopery</Text>
          <Text lineHeight="120%" fontWeight={600} color={"#002603"} fontSize={{ base: "36px", md: "56px" }}  >Fresh & Healthy
            Organic Food</Text>
        </VStack>
        <Text as="span" color="#00B207" fontSize={{ base: "sm", md: "md" }}  fontWeight={400} >Free shipping on all your order. we deliver, you enjoy</Text>
        <NavLink to="/contact-us" >
          <Button size={{ base: "sm", md: "md" }} bgColor="#00B207" color="#fff" >
            Contact Us
          </Button>
        </NavLink>

      </VStack>
    </HStack>
  )
}

export default Banner
