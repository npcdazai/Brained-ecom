import React from 'react'
import MainFrame from '../components/MainFrame'
import Products from '../components/Home/Products'
import Banner from '../components/Home/ChakraCarousel'

const Home = () => {
    return (
        <MainFrame>
            <Banner />
            <Products />
        </MainFrame>
    )
}

export default Home
