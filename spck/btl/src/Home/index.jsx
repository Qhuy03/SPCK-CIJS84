import React from "react";
import Header from "./Header";
import ContentIMG from "./ContentIMG";
import Content from "./Content";
import Footer from "./Footer";
import './homepage.css';
import '../BangTin/css/bootstrap.css';  
import '../BangTin/css/responsive.css';
import '../BangTin/css/colors.css';
import '../BangTin/css/version/tech.css';

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