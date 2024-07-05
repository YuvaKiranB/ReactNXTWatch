import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Context from './Context'

import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, activeTab: 'Home', showBanner: true}

  changeMode = () => {
    this.setState(previousState => ({isDarkMode: !previousState.isDarkMode}))
  }

  toHome = () => {
    this.setState({activeTab: 'Home'})
  }

  toTrending = () => {
    this.setState({activeTab: 'Trending'})
  }

  toGames = () => {
    this.setState({activeTab: 'Games'})
  }

  toSavedVideos = () => {
    this.setState({activeTab: 'SavedVideos'})
  }

  clickedCross = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {isDarkMode, activeTab, showBanner} = this.state
    return (
      <Context.Provider
        value={{
          isDarkMode,
          changeMode: this.changeMode,
          activeTab,
          toHome: this.toHome,
          toTrending: this.toTrending,
          toGames: this.toGames,
          toSavedVideos: this.toSavedVideos,
          showBanner,
          clickedCross: this.clickedCross,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/video/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
