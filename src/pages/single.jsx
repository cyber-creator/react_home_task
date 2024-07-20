// ItemDetail.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Single = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <Header />
      <main className="main">
      <div className="wrapper">
        <section className="single__product">
          <div className="single__product-inner">
            <div className="single__img-box">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="single__detail-box">
              <h2 className="single__title">{item.recipe_title}</h2>
              <div className="single__rating-box">
                  <div className="rating">
                    <div className="rating__inner">
                      <div className="rating__active"></div>
                    </div>
                    <div className="rating__average">4.5</div>
                  </div>
              </div>
              <div className="single__detail-item"><span className="detail__title">Category:</span><span className="detail__item">{item.category}</span></div>
              <div className="single__detail-item"><span className="detail__title">Composition:</span><span className="detail__item">{item.composition}</span></div>
              <div className="single__quantity-box">
              </div>
            </div>
          </div>

          <span className="detail__title">Description:</span>
                <div className="single_description">{item.recipe_description}</div>
        </section>
      </div>		
    </main> 

    <Footer />
  </>
  )
};

export default Single;