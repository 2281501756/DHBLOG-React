import styled from 'styled-components'

const NavStyle = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  z-index: 1000;

  & > aside {
    display: flex;
  }

  & > aside > div {
    padding: 10px;
    cursor: pointer;
  }
`

export default NavStyle