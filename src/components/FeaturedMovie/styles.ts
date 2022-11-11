import styled from "styled-components";


export const Container = styled.section`
  height: 100vh;
  .wrapper{
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
    .destaque{
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-top: 70px;
      padding-bottom: 150px;
      h1{
        font-size: 50px;
        font-weight: bold;
      }
      .infos{
        font-size: 18px;
        font-weight: bold;
        margin-top: 16px;
        span{
          display: inline-block;
          margin-right: 15px;
          &.points{
            color: #46d369;
          }
        }
        >p{
          margin-top: 15px;
          font-size: 20px;
          color: #999;
          max-width: 40%;
        }
        .actions{
          margin-top: 15px;
          display: inline-block;
          button{
            font-size: 20px;
            font-weight: bold;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            margin-right: 10px;
            opacity: 1;
            &:hover{
              opacity: .7;
              transition: all ease .2s;
            }
            &.player-button{
              background: white;
              color: black;
            }
            &.add-button{
              background-color: #333;
              color: white;
            }
          }
        }
        .genres{
          margin-top: 15px;
          font-size: 18px;
          color: #999;
        }
      }
    }
  }
  @media(max-width: 760px){
    height: 90vh;
    .wrapper{
      .destaque{
        h1{
          font-size: 40px;
        }
        .infos{
          font-size: 16px;
          >p{
            font-size: 14px;
            max-width: 100%;
            margin-right: 30px;
          }
          .player-button, .add-button{
            font-size: 16px;
          }
          .genres{
            font-size: 14px;
          }
        }
      }
    }
  }
`;