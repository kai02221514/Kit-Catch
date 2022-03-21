import React from 'react';
import styled from 'styled-components';

const TaskCardContainer = styled.div`
  width: 22vw;
  min-width: 250px;
  height: 18vh;
  min-height: 120px;
  float: left;
  border: gray solid 0.5px;
  border-radius: 16px;
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
  text-align: center;
  padding: 3%;
  font-weight: bold;
  background-color: #1580ce;
  border-radius: 16px 16px 0px 0px;
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
        <TaskTitle>pa</TaskTitle>
        <Tags>PPAP</Tags>
        <Tags>Apple</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>PPAP</Tags>
        <Tags>Apple</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>PPAP</Tags>
        <Tags>Apple</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
        <Tags>nu</Tags>
      </TaskCardContainer>
    </>
  );
}
