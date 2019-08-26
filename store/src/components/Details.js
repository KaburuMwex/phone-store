import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import{Link} from 'react-router-dom';
import{ButtonContainer} from './Button';
    


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const{id, company, img,info,price,title, inCart}=
                        value.detailProduct;
                        return(
                            <div className="container py-5">
                                {/*start of title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center
                                    text-slated text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/*end of title */}
                                {/*start of product info */}
                                <div className="row">
                                    {/*product image */}
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                    {/*product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3
                                    text-capitalize">
                                        <h2>Model: {title}</h2>
                                        <h4 className="text-title text-uppercase
                                        text-muted mt-3 mb-2">
                                            Made by: <span className="text-uppercase">
                                                {company}
                                            </span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price: <span>Ksh </span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold
                                            mt-3 mb-0">
                                            Product Description
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                        {/*end of product info */}
                                        {/*buttons section */}
                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    Go Home
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer 
                                            cart
                                            disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                            >
                                                {inCart ? "inCart": "add to cart"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                                {/*end of product properties */}
                                
                            </div>
                        )
                }}
            </ProductConsumer>
        );
    }
}
