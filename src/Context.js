import React from 'react'

const Context = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
  activeTab: 'Home',
  toHome: () => {},
  toTrending: () => {},
  toGames: () => {},
  toSavedVideos: () => {},
  clickedCross: () => {},
  showBanner: true,
})

export default Context
