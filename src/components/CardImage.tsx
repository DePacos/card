import React from 'react';
import cartImg from '../assets/images/cart-image.webp'
import styled from "styled-components";
function CardImage() {
    return (
        <StyledCardImage>
            <img src={cartImg} alt="Cart-Image"/>
        </StyledCardImage>
    );
}

const StyledCardImage = styled.div
    `
        margin-bottom: 20px;
        img{
            display: block;
        }
    `
export default CardImage;