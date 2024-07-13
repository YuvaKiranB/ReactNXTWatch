import {withRouter, Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../Context'

import {
  LeftPaneContainer,
  Part1,
  TabButton,
  Description,
  Part2,
  ContactUs,
  Icon,
  IconsContainer,
  Description2,
} from './styling'

import './index.css'

const LeftPane = props => (
  <Context.Consumer>
    {value => {
      const {isDarkMode} = value

      const {match} = props
      const {path} = match

      const isHomeActive = path === '/'
      const isTrendingActive = path === '/trending'
      const isGamingActive = path === '/gaming'
      const isSavedVideosActive = path === '/saved-videos'

      return (
        <LeftPaneContainer isDarkMode={isDarkMode}>
          <Part1>
            <Link to="/" className="link">
              <TabButton isActive={isHomeActive} isDarkMode={isDarkMode}>
                <AiFillHome />
                <Description isActive={isHomeActive} isDarkMode={isDarkMode}>
                  Home
                </Description>
              </TabButton>
            </Link>

            <Link to="/trending" className="link">
              <TabButton isActive={isTrendingActive} isDarkMode={isDarkMode}>
                <HiFire />
                <Description
                  isActive={isTrendingActive}
                  isDarkMode={isDarkMode}
                >
                  Trending
                </Description>
              </TabButton>
            </Link>

            <Link to="/gaming" className="link">
              <TabButton isActive={isGamingActive} isDarkMode={isDarkMode}>
                <SiYoutubegaming />
                <Description isActive={isGamingActive} isDarkMode={isDarkMode}>
                  Gaming
                </Description>
              </TabButton>
            </Link>

            <Link to="/saved-videos" className="link">
              <TabButton isActive={isSavedVideosActive} isDarkMode={isDarkMode}>
                <MdPlaylistAdd />
                <Description
                  isActive={isSavedVideosActive}
                  isDarkMode={isDarkMode}
                >
                  Saved videos
                </Description>
              </TabButton>
            </Link>
          </Part1>

          <Part2>
            <ContactUs isDarkMode={isDarkMode}>CONTACT US</ContactUs>
            <IconsContainer>
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Description2 isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations
            </Description2>
          </Part2>
        </LeftPaneContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(LeftPane)
