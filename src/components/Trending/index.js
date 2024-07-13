import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import GetVideoCard from './VideoCard'
import Header from '../Header'
import LeftPane from '../LeftPane'

import {
  TrendingContainer,
  ContentContainer,
  HeaderContainer,
  TrendingLogoContainer,
  TrendingHeading,
  CardsList,
  RightPane,
} from './styling'

import Context from '../../Context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {cardsList: [], cardsApiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCards()
  }

  getCards = async () => {
    this.setState({
      cardsApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(videos => ({
        id: videos.id,
        title: videos.title,
        thumbnailUrl: videos.thumbnail_url,
        channel: {
          name: videos.channel.name,
          profileImageUrl: videos.channel.profile_image_url,
        },
        viewCount: videos.view_count,
        publishedAt: videos.published_at,
      }))

      this.setState({
        cardsList: updatedData,
        cardsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({cardsApiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {cardsApiStatus, cardsList} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <TrendingContainer isDarkMode={isDarkMode}>
              <Header />
              <ContentContainer>
                <LeftPane />
                <RightPane>
                  <HeaderContainer isDarkMode={isDarkMode}>
                    <TrendingLogoContainer isDarkMode={isDarkMode}>
                      <HiFire />
                    </TrendingLogoContainer>
                    <TrendingHeading isDarkMode={isDarkMode}>
                      Trending
                    </TrendingHeading>
                  </HeaderContainer>
                  {cardsApiStatus === apiStatusConstants.success && (
                    <CardsList>
                      {cardsList.map(eachItem => (
                        <GetVideoCard key={eachItem.id} content={eachItem} />
                      ))}
                    </CardsList>
                  )}
                </RightPane>
              </ContentContainer>
            </TrendingContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
