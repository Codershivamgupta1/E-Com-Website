import axios from "axios"
import Header from "./Header"
import { useCart } from "./CustomCart";

export default function Kid(){
    const [cart,setCart]=useCart();

const product=[
    {
        id:23,
        Name:"Trendy Modern",
        Price:5000,
        Qty:0,
        Image:"Project/Kid/1.webp"
    },
    {
        id:24,
        Name:"Soft Fabric",
        Price:3000,
        Qty:0,
        Image:"Project/Kid/2.webp"
    },
    {
        id:25,
        Name:"Kurti",
        Price:12000,
        Qty:0,
        Image:"Project/Kid/3.avif"
    },

    {
        id:26,
        Name:"Frok",
        Price:2500,
        Qty:0,
        Image:"Project/Kid/4.jpg.crdownload"
    }
    ,

    {
        id:27,
        Name:"Party Wear",
        Price:3000,
        Qty:0,
        Image:"Project/Kid/5.jpg"
    }
    ,

    {
        id:28,
        Name:"Fancy Wear",
        Price:3500,
        Qty:0,
        Image:"Project/Kid/6.webp"
    }
    ,

    {
        id:29,
        Name:"Style",
        Price:4000,
        Qty:0,
        Image:"Project/Kid/7.webp"
    },

    {
        id:30,
        Name:"Summer",
        Price:5000,
        Qty:0,
        Image:"Project/Kid/8.jpg"
    },

    {
        id:31,
        Name:"Part Wear",
        Price:5000,
        Qty:0,
        Image:"Project/Kid/9.webp"
    },

    {
        id:33,
        Name:"Function",
        Price:5000,
        Qty:0,
        Image:"Project/Kid/10.webp"
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
    <h1>Kid's Wear</h1>
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