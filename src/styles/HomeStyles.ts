import styled from "styled-components";


export const Container = styled.section`
  position: relative;

  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    background: black;
    top: 0;
    z-index: 99;
    overflow: hidden;
    img{
      height: 50%;
      width: 50%;
    }
  }
  footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2px;
    width: 100%;
    height: 200px;
    margin-top: 250px;
  }

`;