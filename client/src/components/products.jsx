import { useEffect } from "react";
import { useState } from "react";

export default function Products() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div id="products">

            <div id="products-list">
                <div className="product" >
                    <img src="../public/watch.jpg" alt="Product Image"/>
                    <h3>Product Name</h3>
                    <p>Nice all black watch, very stylish...</p>
                    <i>£150</i>
                    <button>Add to cart</button>
                </div>
                {products.slice(0).map((product, idx) => {
                    return (
                        <div className="product" key={idx}>
                            <img src={product.img_src} alt="Product Image"/>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <i>{product.price}</i>
                            <button>Add to cart</button>
                        </div>
                )})}
                
            </div>
        </div>
    );
}