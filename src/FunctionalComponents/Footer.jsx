import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosContact } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <HStack bgColor="#333333" px={{ base: "1rem", md: "6rem" }} py={3} w="100%" justifyContent="space-between">
            <HStack w="60%" cursor="pointer" ><CiLocationOn color="#B3B3B3" /> <Text as="span" fontSize={{ base: "xx-small", md: "xs" }} color="#B3B3B3" >Store Location: Lincoln- 344, Illinois, Chicago, USA</Text></HStack>
            <NavLink w="40%" to="/contact-us" >
                <HStack cursor="pointer" ><IoIosContact color="#B3B3B3" fontSizesize="md" /> <Text as="span" fontSize={{ base: "xx-small", md: "xs" }} color="#B3B3B3" _hover={{ color: "blue.500" }} textDecoration="underline" >Contact Us</Text></HStack>
            </NavLink>
        </HStack>
    )
}

export default Footer
