import {MdPlaylistAdd} from 'react-icons/md'

import GetVideoCard from './VideoCard'
import Header from '../Header'
import LeftPane from '../LeftPane'

import Context from '../../Context'

import {
  SavedVideosContainer,
  ContentContainer,
  HeaderContainer,
  SavedLogoContainer,
  SavedHeading,
  CardsList,
  RightPane,
} from './styling'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value
      console.log(savedVideos)

      return (
        <SavedVideosContainer isDarkMode={isDarkMode}>
          <Header />
          <ContentContainer>
            <LeftPane />
            <RightPane>
              <HeaderContainer isDarkMode={isDarkMode}>
                <SavedLogoContainer isDarkMode={isDarkMode}>
                  <MdPlaylistAdd />
                </SavedLogoContainer>
                <SavedHeading isDarkMode={isDarkMode}>
                  Saved Videos
                </SavedHeading>
              </HeaderContainer>

              <CardsList>
                {savedVideos.map(eachItem => (
                  <GetVideoCard key={eachItem.id} content={eachItem} />
                ))}
              </CardsList>
            </RightPane>
          </ContentContainer>
        </SavedVideosContainer>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
