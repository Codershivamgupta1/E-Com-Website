import Header from "./Header";
import { useCart } from "./CustomCart";
export default function Cart(){
    const[cart,setCart]=useCart();


    //Total Amount

    const TotalAmount=()=>{
            let Total=0;
            cart.map(item=>{
                Total+=item.Price*item.Qty;
            })
            return Total;

    }


    //Remove Item

    const RemoveItem=(id)=>{
        if(window.confirm("Are you Sure")){
        let mycart=[...cart];
        let index=mycart.findIndex(item=>item.id=id)
        cart.splice(index,1);
        setCart([...cart]);
        localStorage.setItem('cart',JSON.stringify(cart));
        alert("Item removed from List")
    }}

    return(<>
    <Header/>
    

    <div className="container mt-55">
        {
        cart.length<1?(<h3 align="center">Card is Empty</h3>):(
        
        
        <>

        <div className="row justify-content-between">
            <div className="col-md-8">
                <table className="table">
                    <thead>
                        
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Total</th>
                            <th>Image</th>
                            <th>Remove</th>
                            
                        </tr>
                    </thead>
                    
                        <tbody>
                            {
                                cart.map(item=>

                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Qty}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.Price*item.Qty}</td>
                                        <td><img src={item.Image}width="70"/></td>
                                        <td><button className="btn btn-danger" onClick={()=>RemoveItem(item.id)}>Remove</button></td>
                                    
                                    </tr>
                                    
                                )
                            }
                        </tbody>

                </table>

            </div>



                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12 bg-warning"><h4>Bill Amount</h4></div>
                            <div className="col-mt-4">
                                <div className="col-md-8"><h4>Total Amount</h4>           </div>
                                <div className="col-md-4">{TotalAmount()}</div>
                            </div>
                        </div> 
                    </div>



                            


        </div>
        </>
        
        )
}
    </div>
    </>)
}