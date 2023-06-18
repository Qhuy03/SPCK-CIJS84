import React from "react";
import Header from "./Header";
import ContentIMG from "./ContentIMG";
import Content from "./Content";
import Footer from "./Footer";
import './homepage.css';

const Home = ()=>{
    return(
        <>
            <Header/>
            <ContentIMG/>
            <Content/>
            <Footer/>
        </>
    );
};

export default Home;