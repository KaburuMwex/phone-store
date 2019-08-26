import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm
                navbar-dark px-sm-5 ">
                    <Link to="/">
                        <img src={logo} alt="store" className="nav-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Shopping
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fa fa-cart-plus"></i>
                        
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}


const NavWrapper= styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    
    }
    .navbar-brand{
        width: 1.4rem;
        border-radius:0.5em;
        transition: all 0.5s ease-in-out;
        &:hover{
        background:var(--lightBlue);
        color: var(--mainBlue);
    }
    }
`; 
