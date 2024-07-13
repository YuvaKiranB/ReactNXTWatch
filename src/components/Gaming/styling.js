import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ebebeb')};
  margin-bottom: 10px;
`

export const GamingLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background-color: ${props => (props.isDarkMode ? 'black' : '#cbd5e1')};
  margin-right: 20px;
  font-size: 45px;
  border-radius: 50%;
  color: #ff0b37;
`

export const GamingHeading = styled.h1`
  margin: 0px;
  color: ${props => (props.isDarkMode ? '#ebebeb' : 'black')};
`

export const CardsList = styled.ul`
  list-style: none;
  padding-left: 0px;
  font-family: roboto;
  overflow: scroll;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

export const RightPane = styled.div`
  width: 100%;
`
