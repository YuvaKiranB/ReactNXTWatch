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

const LeftPane = () => (
  <Context.Consumer>
    {value => {
      const {
        activeTab,
        isDarkMode,
        toHome,
        toTrending,
        toGames,
        toSavedVideos,
      } = value

      const isHomeActive = activeTab === 'Home'
      const isTrendingActive = activeTab === 'Trending'
      const isGamingActive = activeTab === 'Games'
      const isSavedVideosActive = activeTab === 'SavedVideos'

      return (
        <LeftPaneContainer isDarkMode={isDarkMode}>
          <Part1>
            <Link to="/" className="link">
              <TabButton
                onClick={toHome}
                isActive={isHomeActive}
                isDarkMode={isDarkMode}
              >
                <AiFillHome />
                <Description isActive={isHomeActive} isDarkMode={isDarkMode}>
                  Home
                </Description>
              </TabButton>
            </Link>

            <Link to="/trending" className="link">
              <TabButton
                onClick={toTrending}
                isActive={isTrendingActive}
                isDarkMode={isDarkMode}
              >
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
              <TabButton
                onClick={toGames}
                isActive={isGamingActive}
                isDarkMode={isDarkMode}
              >
                <SiYoutubegaming />
                <Description isActive={isGamingActive} isDarkMode={isDarkMode}>
                  Gaming
                </Description>
              </TabButton>
            </Link>

            <Link to="/saved-videos" className="link">
              <TabButton
                onClick={toSavedVideos}
                isActive={isSavedVideosActive}
                isDarkMode={isDarkMode}
              >
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
