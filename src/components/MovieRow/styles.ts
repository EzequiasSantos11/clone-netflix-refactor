import styled from "styled-components";


export const Container = styled.div`
  margin-top: -100px;
  margin-bottom: 180px;
  h2{
    margin: 0;
    margin-left: 30px;
  }
  .listarea{
    overflow-x: hidden;
    padding-left: 30px;
    .list{
     transition: all ease 0.5s;
     .item{
        display: inline-block;
        width: 150px;
        img{
          width: 100%;
          transform: scale(0.9);
          &:hover{
            transform: scale(1);
            transition: all ease .2s;
            cursor: pointer;
          }
        }
      }
    }
  }
  .left, .right{
    position: absolute;
    width: 80px;
    height: 225px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all .5s;
    svg{
      font-size: 40px;
    }
  }
  .left{
  left: 0;
  }
  .right{
  right: 0;
  }
  &:hover .left, 
  &:hover .right{
    opacity: 1;
    transition: all .5s;
  }
  @media(max-width: 760px){
    .left, .right{
      opacity: 1;
    }

  }
`;