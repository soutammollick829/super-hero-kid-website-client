import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const ToyProduct = () => {

    const [toyProducts,setToyProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/transformer`)
        .then(res => res.json())
        .then(data => setToyProducts(data))
    },[])
    return (
        <div className="mt-20">
            <div className="text-center">
            <p className="font-bold text-2xl text-teal-600">Transformers:{toyProducts.length}</p>
            <h2 className="text-4xl font-bold">Our Toy Product</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, optio saepe. Perspiciatis, repellendus assumenda placeat consequatur eligendi nostrum iste culpa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {
                toyProducts.map(toy => <ProductCard key={toyProducts._id}
                    toy={toy}
                >
                </ProductCard>)
            }
        </div>
        </div>
    );
};

export default ToyProduct;