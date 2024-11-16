import axios from "axios"
import Header from "./Header"
import { useCart } from "./CustomCart";

export default function Women(){
    const [cart,setCart]=useCart();

const product=[
    {
        id:14,
        Name:"Trendy Modern ",
        Price:5000,
        Qty:0,
        Image:"Project/Women/1.webp"
    },
    {
        id:15,
        Name:"Fabric",
        Price:3000,
        Qty:0,
        Image:"Project/Women/2.webp"
    },
    {
        id:16,
        Name:"Office Outfit",
        Price:12000,
        Qty:0,
        Image:"Project/Women/3.jpg"
    },

    {
        id:17,
        Name:"Top",
        Price:2500,
        Qty:0,
        Image:"Project/Women/4.jpg"
    }
    ,

    {
        id:18,
        Name:"Suit",
        Price:2500,
        Qty:0,
        Image:"Project/Women/5.jpg"
    }
    ,

    {
        id:19,
        Name:"Floral Print",
        Price:3500,
        Qty:0,
        Image:"Project/Women/7.avif"
    }
    ,

    {
        id:20,
        Name:"Comfy Latest",
        Price:4000,
        Qty:0,
        Image:"Project/Women/8.jpg"
    },

    {
        id:21,
        Name:"Business Outfit",
        Price:5000,
        Qty:0,
        Image:"Project/Women/6.jpg"
    },

    {
        id:22,
        Name:"Saree",
        Price:5000,
        Qty:0,
        Image:"Project/img1.webp"
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
    <h1>Women's Wear</h1>
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