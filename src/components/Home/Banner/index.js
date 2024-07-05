import {IoMdClose} from 'react-icons/io'

import Context from '../../../Context'

import {
  BannerCard,
  ContentContainer,
  LogoImage,
  BannerPara,
  GetItButton,
  CloseContainer,
  CloseButton,
} from './styling'

const Banner = () => (
  <Context.Consumer>
    {value => {
      const {isDarkMode, showBanner, clickedCross} = value
      console.log(isDarkMode)
      return (
        <BannerCard showBanner={showBanner}>
          <ContentContainer>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <BannerPara>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPara>
            <GetItButton type="button">GET IT NOW</GetItButton>
          </ContentContainer>
          <CloseContainer>
            <CloseButton type="button" onClick={clickedCross}>
              <IoMdClose />
            </CloseButton>
          </CloseContainer>
        </BannerCard>
      )
    }}
  </Context.Consumer>
)

export default Banner
