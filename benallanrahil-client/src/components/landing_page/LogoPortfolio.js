import React from 'react';
import styled from "styled-components"

const Grid = styled.div`
    display: flex;
    flex-direction: col
    align-items: center;
    background-color: #3f8994;
`

const Logo = styled.img`

`

const LogoPortfolio = () => {
    return (
      <div>
        <Grid>
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
          <img src="https://via.placeholder.com/150" />
        </Grid>
      </div>
    )
}

export default LogoPortfolio;
