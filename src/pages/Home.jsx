import React from 'react'
import MainFrame from '../components/MainFrame'
import Products from '../components/Home/Products'
import Banner from '../components/Home/Banner'

const Home = () => {
    return (
        <MainFrame>
            <Banner />
            <Products />
        </MainFrame>
    )
}

export default Home
