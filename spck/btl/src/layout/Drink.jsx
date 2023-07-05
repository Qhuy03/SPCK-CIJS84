import React, {useEffect} from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";
const Drink = ({
    anh,
    tendouong,
    giatien
}) =>{
    const navigate = useNavigate();
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const goDetail = () => {
        navigate(`/detail?name=${tendouong}`, {state: {
            anh: anh,
            tendouong: tendouong,
            giatien: giatien,
        }})

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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