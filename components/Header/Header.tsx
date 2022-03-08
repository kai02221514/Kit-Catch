import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: solid lightgray 0.5px;
  background-color: white;
  table-layout: fixed;
  z-index: 1;
`

const HeaderText = styled.p`
  margin: 12px 0px;
  color: #666;
  font-size: 19px;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 3px;
  @media screen and (min-width: 768px) {
  position: relative;
  height: 40px;
  font-size: 2.5vw;
  letter-spacing: 7px;
  }
`

interface Props {
    page: string
}

export function Header({ page }: Props) {
    return (
        <HeaderContainer onClick={() => { window.scroll({ top: 0, behavior: 'smooth' }) }}>
            <HeaderText>
                {page}
            </HeaderText>
        </HeaderContainer>
    )
}