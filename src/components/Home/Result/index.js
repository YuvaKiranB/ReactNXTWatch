import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import GetVideoCard from '../VideoCard'

import Context from '../../../Context'

import {
  MainContainer,
  SearchBar,
  SearchInput,
  SearchButton,
  CardsList,
} from './styling'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ResultContainer extends Component {
  state = {searchInput: ''}

  componentDidMount() {
    this.getCards()
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      cardsApiStaus: apiStatusConstants.initial,
    })
  }

  changeSearchInput2 = event => {
    if (event.key === 'Enter') {
      this.getCards()
    }
  }

  getCards = async () => {
    this.setState({
      cardsApiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
    const {cardsApiStatus, searchInput, cardsList} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <MainContainer isDarkMode={isDarkMode}>
              <SearchBar>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.changeSearchInput}
                  onKeyDown={this.changeSearchInput2}
                />
                <SearchButton
                  isDarkMode={isDarkMode}
                  onClick={this.updateSearchInput}
                  type="button"
                >
                  <BsSearch />
                </SearchButton>
              </SearchBar>

              {cardsApiStatus === apiStatusConstants.success && (
                <CardsList>
                  {cardsList.map(eachItem => (
                    <GetVideoCard key={eachItem.id} content={eachItem} />
                  ))}
                </CardsList>
              )}
            </MainContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(ResultContainer)
