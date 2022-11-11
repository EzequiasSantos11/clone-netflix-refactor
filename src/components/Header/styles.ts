import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 30px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  transition: all ease .5s;
  &.black{
    background: #141414;
  }
  .logo{
    height: 25px;
    img{
      height: 100%;
    }
  }
  .user{
    height: 35px;
    img{
      height: 100%;
      border-radius: 5px;
    }
  }
`;