import styled from 'styled-components';

const BlackBack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  z-index: 2;
`;

const MenuButtonContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
`;

const MenuButtonItem = styled.div`
    &:hover {
        background-color: #abcbf3;
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

export function MenuButton() {
    const menu: string[] = ["時間割", "課題", "点数計算", "LINE連携", "設定"]
    return (
        <>
        <BlackBack />
        <MenuButtonContainer>
        {menu.map((key) =>
            <MenuButtonItem>{key}</MenuButtonItem>
        )}
        </MenuButtonContainer>
        </>
    )
}