import React from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";
const Drink = ({
    anh,
    tendouong,
    giatien
}) =>{
    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`/detail?name=${tendouong}`, {state: {
            anh: anh,
            tendouong: tendouong,
            giatien: giatien,
        }})
    };

    return(

        <div style={{marginLeft:20}} href="#">
        <a onClick={goDetail}>
            <img src={anh} style={{height:250,width:250}}/>
            <p style={{fontSize:20,fontWeight:"bold",color:"gray"}}>{tendouong} </p>
            <p style={{fontSize:20,color:"green"}}>{giatien}</p>
        </a>
        </div>
    )
};

export default Drink;