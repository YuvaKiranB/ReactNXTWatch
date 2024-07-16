import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'

import GetHamburgerButton from './HamburgerPopup'
import GetLogoutButtonSmall from './LogoutPopupSmall'

import Context from '../../Context'

import {
  HeaderContainer,
  WebsiteLogo,
  IconsContainer,
  ThemeSwitchButton,
  ButtonsContainerLarge,
  LogoutButtonLarge,
  ProfileButton,
  ProfileImage,
} from './styling'

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode, changeMode} = value

      const logout = () => {}

      return (
        <HeaderContainer backgroundColor={isDarkMode ? '#313131' : 'white'}>
          {isDarkMode ? (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )}

          <IconsContainer>
            <ThemeSwitchButton
              type="button"
              onClick={changeMode}
              color={isDarkMode ? 'white' : 'black'}
            >
              {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
            </ThemeSwitchButton>
            <GetHamburgerButton />

            <GetLogoutButtonSmall />
          </IconsContainer>

          <ButtonsContainerLarge>
            <ThemeSwitchButton
              type="button"
              onClick={changeMode}
              color={isDarkMode ? 'white' : 'black'}
            >
              {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
            </ThemeSwitchButton>
            <ProfileButton type="button" color={isDarkMode ? 'white' : 'black'}>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <LogoutButtonLarge
              onClick={logout}
              type="button"
              color={isDarkMode ? 'white' : '#3b82f6'}
            >
              Logout
            </LogoutButtonLarge>
          </ButtonsContainerLarge>
        </HeaderContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)
