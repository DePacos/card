import React from 'react';
import styled from "styled-components";

function CardDesc() {
  return (
    <StyledCardDesc>
      Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
    </StyledCardDesc>
  );
}

const StyledCardDesc = styled.p
`
    font-size: 12px;
    line-height: 20px;
    max-width: 260px;
    margin-bottom: 19px;
    color: #abb3ba;
`

export default CardDesc;