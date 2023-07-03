import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import ContentStory from "./ContentStory";
import './CauChuyen.css';

const Story = ()=>{
    return(
        <>
            <Header/>
            <hr/>
            <ContentStory/>
            <Footer/>

        </>
    );
};

export default Story;