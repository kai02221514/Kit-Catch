import React, { useState } from 'react';
import styled from 'styled-components';

const Table = styled.table<{ color: string }>`
  border-collapse: collapse;
  margin: 56px auto;
  position: relative;
  top: 2vw;
  padding: 0;
  width: 100%;
  height: 100%;
  table-layout: fixed;
  tr {
    background-color: #fff;
  }
  thead th {
    padding: 3px 0;
    background-color: #424347;
    font-size: 0.9em;
    font-weight: bolder;
    color: #fff;
  }
  tbody tr {
    @media all and (min-width: 768px) {
      height: 17vh;
      font-size: 1.5em;
      line-height: 50px;
    }
    line-height: 20px;
    font-size: 0.6em;
    height: 10vh;
    background-color: ${({ color }) => color};
    color: white;
    display: flex;
    margin: 4px 1px;
    padding: 0 8px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    &:active {
      transform: translate(1px, 1.5px);
      box-shadow: 0.3px 0.3px 1.5px rgba(0, 0, 0, 0.4);
      background-color: #ddd;
    }
  }
`;

const Annotation = styled.p`
  color: #555;
  font-size: 11px;
  text-align: center;
  @media all and (min-width: 768px) {
    font-size: 20px;
  }
`;

interface Props {
  color: string;
  tableValue: {
    [key: string]: { subject: string; description: string; teacher: string; color: string }[];
    monday: { subject: string; description: string; teacher: string; color: string }[];
    tuesday: { subject: string; description: string; teacher: string; color: string }[];
    wednesday: { subject: string; description: string; teacher: string; color: string }[];
    thursday: { subject: string; description: string; teacher: string; color: string }[];
    friday: { subject: string; description: string; teacher: string; color: string }[];
  } | null;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setTeacher: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export function TimeTable({
  color,
  tableValue,
  setDay,
  setTime,
  setSubject,
  setDescription,
  setTeacher,
  setOpen,
  setColor,
}: Props) {
  return (
    <>
      <Table color={color}>
        <thead>
          <tr>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
          </tr>
        </thead>
        <tbody>
          {tableValue &&
            ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((key) => (
              <th key={key}>
                {tableValue &&
                  tableValue[key].map((cell, j) => (
                    <tr
                      key={key + j.toString()}
                      onClick={() => {
                        setOpen(true);
                        setDay(key);
                        setTime(j);
                        setSubject(cell.subject);
                        setDescription(cell.description);
                        setTeacher(cell.teacher);
                        setColor(cell.color);
                      }}
                    >
                      {cell.subject}
                      <br />
                      {cell.teacher}
                    </tr>
                  ))}
              </th>
            ))}
        </tbody>
      </Table>
      <Annotation>↑ 表のセルをクリックすることで時間割を修正可能です</Annotation>
    </>
  );
}
