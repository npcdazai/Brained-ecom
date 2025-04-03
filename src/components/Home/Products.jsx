import { Box, Button, Grid, Heading, HStack, Image, Input, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MainFrame from '../MainFrame';
import Menubar from "../../FunctionalComponents/Menubar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import Bag from "../../assets/icons/Rectangle.svg";
import { InputGroup } from '../ui/input-group';
import { IoMenu, IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Portal, Select, createListCollection } from "@chakra-ui/react"

const Products = () => {
  const { isLoading, productData } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.images[0]
    }));
  };

  const filteredProducts = productData?.products?.filter((product) =>
    (category === "all" || product.category === category) &&
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainFrame>
      <VStack w="100%" gap={8} zIndex="-1px" >
        <Heading mt={4} fontSize="xx-large" fontWeight={600} >Introducing Our Products</Heading>

        <HStack mb={4}>

          <InputGroup
            flex="1"
            startElement={<IoSearchOutline />}
            onChange={(e) => setSearch(e.target.value)}
          // endElement={<Button bgColor="#00B207" fontSize="xs" borderRadius="none" borderTopRightRadius="8px" borderBottomRightRadius="8px" color="#fff" >Search</Button>}
          >
            <Input w="90%" border="none" placeholder="Search" />
          </InputGroup>

          <select
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "16px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="all">All Categories</option>
            {Array.from(new Set(productData?.products?.map((p) => p.category))).map(
              (cat) => (
                <option key={cat} value={cat} style={{ padding: "10px" }}>
                  {cat}
                </option>
              )
            )}
          </select>

        </HStack>

        <Grid templateColumns="repeat(4, 1fr)" gap="6" overflowX="hidden" px={6} >
          {filteredProducts?.map((val) => (
            <div key={val.id}>
              <VStack alignItems="flex-start" w="100%" >
                <Box height="250px" w="250px" position="relative" >
                  <Image src={val.images[0]} h="100%" w="100%" />
                  <Box bgColor="#EA4B48" color="#fff" py={1} px={2} rounded={"md"} position="absolute" top={2} left={2} >Sale {val.discountPercentage} %</Box>
                </Box>
                <HStack justifyContent="space-between" w="100%" mt={3} px={3} >
                  <VStack alignItems="flex-start" >
                    <Text color="#2B572E" fontSize="xs" fontWeight={700} >{val.title}</Text>
                    <Text color="#2B572E" fontSize="sm" fontWeight={700} >$ {val.price}</Text>
                  </VStack>
                  <Button bgColor="#00B207" color="#fff" onClick={() => handleAddToCart(val)} >
                    <HStack spacing={2}>
                      <Text>+</Text>
                      <Image src={Bag} boxSize="20px" />
                    </HStack>
                  </Button>
                  {items.some(item => item.id === val.id) && (
                    <Button bgColor="#EA4B48" color="#fff" onClick={() => dispatch(removeFromCart(val.id))} >
                      <Text>-</Text>
                    </Button>
                  )}
                </HStack>
              </VStack>
            </div>
          ))}
        </Grid>
      </VStack>
    </MainFrame>
  );
};

export default Products;
