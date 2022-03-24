import React from 'react';
import styled from 'styled-components';

const TaskCardContainer = styled.div`
  width: 22vw;
  min-width: 250px;
  height: 18vh;
  min-height: 120px;
  float: left;
  border: gray solid 0.5px;
  border-radius: 9px;
  margin: 1%;
  overflow: scroll;
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  @keyframes fadeUpAnime {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TaskTitle = styled.div`
  color: #ffff;
  text-align: center;
  padding: 3%;
  background-color: #0395fa;
  border-bottom: gray solid 0.5px;
  margin-bottom: 2%;
`;

const Tags = styled.div`
  display: inline-block;
  margin: 0.5%;
  color: #00b7ff;
  border-radius: 16px;
  font-size: 1rem;
  padding: 1%;
  padding-left: 2%;
  :before {
    content: '#';
  }
`;

export function TaskCard() {
  return (
    <>
      <TaskCardContainer>
        <TaskTitle>課題</TaskTitle>
        <Tags>PPAP</Tags>
        <Tags>Apple</Tags>
        <Tags>PineApple</Tags>
        <Tags>Pen</Tags>
        <Tags>小坂大魔神</Tags>
      </TaskCardContainer>
    </>
  );
}
