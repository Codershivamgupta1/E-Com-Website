import { Link } from "react-router-dom"
import { useCart } from "./CustomCart"
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";

export default function Header(){


    const[cart,setCart]=useCart();



    return(<>
    <div className="container-fluid  fixed-top shadow bg-white">
        <div className="row px-5 py-2 bg-warning">
            <div className="col-md-3 text-white">
                <h4>Shivam Studio</h4>
                </div>
                <div className="col-md-6">
                    <input className="form-control" placeholder="Search Item"></input>
                </div>
                <div className="col-md-3 text-end text-white">
                    <Link to="/Cart" className="nav-link">cart{cart.length}</Link>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="nav justify-content-center">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/Men" className="nav-link">Men's Wear</Link></li>
                            <li><Link to="/Women" className="nav-link">Women's Wear</Link></li>
                            <li><Link to="/Kid" className="nav-link">Kid's Wear</Link></li>
                           
                        </ul>
                </div>
        </div>
    </div>
    </div>
    </>)
}