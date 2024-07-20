import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import testCatalog from '../testCatalog.json'
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';


const Catalog = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://35.168.93.141/api/v1/')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);


    return(
        <>
            <Header />
                <main>
                    <div className="main__inner">
                        <section className="catalog">
                            <div className="products__container">
                                {items.map((item, index) => (
                                    <Product key={index} item={item} index={index} />
                                ))}
                            </div>
                        </section>
                    </div>
                    
                </main>
            <Footer />
         </>
    )
};

export default Catalog;