import Header from "./Header"
import { useState } from "react";
import axios from "axios";
import { useCart } from "./CustomCart";

export default function Men(){
    const [cart,setCart]=useCart();

const product=[
    {
        id:4,
        Name:"Shirt",
        Price:2000,
        Qty:0,
        Image:"Project/Men/1.jpg"
    },
    {
        id:5,
        Name:"Tshit & Jeans",
        Price:11000,
        Qty:0,
        Image:"Project/Men/2.jpg"
    },
    {
        id:6,
        Name:"Style",
        Price:12000,
        Qty:0,
        Image:"Project/Men/3.jpg"
    },

    {
        id:7,
        Name:"Jeans",
        Price:2500,
        Qty:0,
        Image:"Project/Img2.jpg"
    }
    ,

    {
        id:8,
        Name:"Jeans",
        Price:2500,
        Qty:0,
        Image:"Project/Img3.jpeg"
    }
    ,

    {
        id:9,
        Name:"Jacket",
        Price:3500,
        Qty:0,
        Image:"Project/Men/4.jpg"
    }
    ,

    {
        id:10,
        Name:"Casual",
        Price:2500,
        Qty:0,
        Image:"Project/Men/5.jpg"
    }
    ,

    {
        id:11,
        Name:"Casual Shirt",
        Price:2000,
        Qty:0,
        Image:"Project/Men/6.jpg"
    }
    ,

    {
        id:12,
        Name:"Casual Outfit",
        Price:2000,
        Qty:0,
        Image:"Project/Men/7.jpg"
    }
    ,

    {
        id:13,
        Name:"Gym Outfit",
        Price:2500,
        Qty:0,
        Image:"Project/Men/8.webp"
    }

]


const Addcart=(pid)=>{

    let mycart=[...cart];
    let dublicate=mycart.find((x)=>
   {
       return x.id==pid;
   }
   )


   if(!dublicate){

   product.map(item=>{
       if(item.id===pid){
           let itemobj={...item,Qty:item.Qty+1}
           setCart([...cart,itemobj]);
           alert("Item Added")
           localStorage.setItem("cart",JSON.stringify([...cart,itemobj]));
       }
})
}
else{
alert("This item is already Added")
}
}


    return(<>
    <h1>Men's Wear</h1>
<Header/>

    <div className="container p-5">
        <div className="row">
            {
            product.map(item=>
                <div className="col-md-4" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            <img src={item.Image} width="70%"/>
                            <h4 className="mt-3">{item.Name}</h4>
                            <h3>Price:{item.Price}</h3>
                            <button className="btn btn-danger" onClick={()=>Addcart(item.id)}>Add Cart</button>
                            </div>
                    </div>
                    </div>
            )
            }
        </div>
    </div>
    
    </>)
}