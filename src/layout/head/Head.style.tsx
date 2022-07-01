import styled from 'styled-components'

const HeadStyle = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: sticky;
  top: 0;
  left: 0;

  & > aside {
    display: flex;
  }

  & > aside > div {
    padding: 10px;
    cursor: pointer;
  }
`

export default HeadStyle