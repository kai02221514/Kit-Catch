import { useState } from 'react';
import styled from 'styled-components';

const BlackBack = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  z-index: 2;
`;

const MenuButtonContainer = styled.div<{ open: boolean }>`
  position: absolute;
  left: ${({ open }) => (open ? '0' : '-100vw')};
  transition: left 0.8s;
  top: 0;
  z-index: 3;
`;

const MenuButtonItem = styled.div`
  &:hover {
    background-color: #abcbf3;
    cursor: pointer;
  }
  transition: background-color 1s;
  background-color: white;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: bolder;
  font-size: 2vw;
  color: black;
  position: relative;
  width: 10vw;
  height: 8vh;
  border-right: solid lightgray 0.5px;
`;

const OpenButton = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '48vw' : '0')};
  transition: left 0.9s;
  height: 54px;
  z-index: 3;
  padding: 6px;
  overflow: hidden;
`;

const Bar = styled.div<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '90deg' : '0')});
  transition: transform 2s;
  border-top: solid lightgray ${({ open }) => (open ? '25px' : '5px')};
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 60px;
  &:first-of-type {
    margin-top: 5px;
  }
`;

export function MenuButton() {
  const items: string[] = ['時間割', '課題', '点数計算', 'LINE連携', '設定'];
  const [menu, setOpen] = useState<boolean>(false);
  const open = () => {
    if (menu) setOpen(false);
    else setOpen(true);
  };
  return (
    <>
      <OpenButton open={menu} onClick={open}>
        <Bar open={menu}></Bar>
        <Bar open={menu}></Bar>
        <Bar open={menu}></Bar>
      </OpenButton>
      <BlackBack open={menu} />
      <MenuButtonContainer open={menu}>
        {items.map((key) => (
          // eslint-disable-next-line react/jsx-key
          <MenuButtonItem>{key}</MenuButtonItem>
        ))}
      </MenuButtonContainer>
    </>
  );
}
