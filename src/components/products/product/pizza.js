import React from 'react';
import './styles/product.scss'
const Pizza = ({product, onAdd}) =>
{
    const {image, type, desc, data} = product

    function addHandler() {
        onAdd(data)
    }

    return (
        <div className="product">
            <div className="product-img">
                <img src={image} alt=""/>
            </div>
            <div className="product-description">
                <h2>{type}</h2>
                <p>{desc}</p>
                <p>цена: {data.price} рублей</p>
            </div>
            <div className="product-buttons">
                <button className="order" onClick={addHandler}>Заказать</button>
            </div>
        </div>
    );
};

export default Pizza;
