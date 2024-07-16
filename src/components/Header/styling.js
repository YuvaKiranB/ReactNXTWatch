import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  @media (min-width: 768px) {
    padding: 20px;
    padding-left: 30px;
  }
`

export const WebsiteLogo = styled.img`
  height: 35px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ThemeSwitchButton = styled.button`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  font-size: 30px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`

export const ButtonsContainerLarge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutButtonLarge = styled.button`
  padding: 2px;
  padding-bottom: 3px;
  font-family: roboto;
  font-size: 14px;
  padding-left: 10px;
  margin: 0px;
  padding-right: 10px;
  margin-right: 20px;
  color: ${props => props.color};
  background-color: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
`

export const ProfileButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-right: 20px;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 30px;
`
