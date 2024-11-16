import { useCart } from "./CustomCart";

export default function Product(){


    const [cart,setCart]=useCart();

const product=[
    {
        id:1,
        Name:"Saree",
        Price:5000,
        Qty:0,
        Image:"Project/Img1.webp"
    },
    {
        id:2,
        Name:"Tshit & Jeans",
        Price:11000,
        Qty:0,
        Image:"Project/Img2.jpg"
    },
    {
        id:3,
        Name:"Trendy Modern",
        Price:12000,
        Qty:0,
        Image:"Project/Women/1.webp"
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
    <h1>Products</h1>

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