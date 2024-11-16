import Header from "./Header"
import Carousel from "./Carousel"
import Product from "./Product"
import Men from "./Men"
import Women from "./Women"
import Kid from "./Kid"
export default function Home(){
    return(<>
    <Header/>
    
            <div className="container-fluid mt-5">
    <Carousel/>
 
    </div>

        <div className="container-fluid">
            <Product/>
            <Men/>
            <Women/>
            <Kid/>
            
           
        </div>

    </>)
}