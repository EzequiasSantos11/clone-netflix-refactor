import styled from "styled-components";


export const Container = styled.section`
  height: 100vh;
  width: 100%;
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
`;