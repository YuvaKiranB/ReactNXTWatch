import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 8px;
  font-family: roboto;
  font-size: 18px;
  width: 80%;
  border: 1px solid #7e858e;
  border-top-left-radius: 5 px;
  border-bottom-left-radius: 5 px;
  outline: none;
  background-color: transparent;
`

export const SearchButton = styled.button`
  width: 20%;
  border: 1px solid #7e858e;
  border-top-right-radius: 5 px;
  border-bottom-right-radius: 5 px;
  font-size: 16px;
  color: #7e858e;
  cursor: pointer;
  background-color: ${props => (props.isDarkMode ? '#424242' : '#f1f1f1')};
`

export const CardsList = styled.ul`
  padding-left: 0px;
  list-style: none;
  overflow: scroll;
  height: 100vh;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
  }
`
