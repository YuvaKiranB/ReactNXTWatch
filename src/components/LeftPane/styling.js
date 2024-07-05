import styled from 'styled-components'

export const LeftPaneContainer = styled.div`
  width: 18%;
  padding-top: 30px;
  height: 90vh;
  background-color: ${props => (props.isDarkMode ? '#313131' : 'transparent')};

  display: none;
  @media (min-width: 768px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Part1 = styled.div`
  text-decoration: none;
`

export const TabButton = styled.button`
  padding: 15px;
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  text-decoration: none;
  font-family: roboto;
  color: ${props => (props.isActive ? '#ff0b37' : '#e2e8f0')};
  color: ${props => !props.isActive && !props.isDarkMode && '#475569'};
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  background-color: ${props => props.isActive && props.isDarkMode && '#475569'};
  background-color: ${props =>
    props.isActive && !props.isDarkMode && '#e2e8f0'};
`

export const Description = styled.span`
  margin-left: 14px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  color: ${props => !props.isDarkMode && props.isActive && 'black'};
  font-weight: ${props => (props.isActive ? 500 : 400)};
`

export const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 40px;
`

export const ContactUs = styled.h1`
  font-family: roboto;
  font-size: 20px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  margin-bottom: 20px;
`

export const Icon = styled.img`
  height: 45px;
  margin-right: 15px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const Description2 = styled.p`
  margin-top: 20px;
  font-family: roboto;
  font-size: 18px;
  color: ${props => (props.isDarkMode ? '#f1f5f9' : '#64748b')};
`
