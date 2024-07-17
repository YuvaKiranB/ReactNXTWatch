import Context from '../../Context'

import {
  ErrorContainer,
  ErrorImage,
  ErrorPara1,
  ErrorPara2,
  RetryButton,
} from './styling'

const ErrorCard = props => {
  const {clickedRetry} = props

  return (
    <Context.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <ErrorContainer>
            {isDarkMode ? (
              <ErrorImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            ) : (
              <ErrorImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            )}

            <ErrorPara1 isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </ErrorPara1>
            <ErrorPara2 isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorPara2>
            <RetryButton onClick={clickedRetry}>Retry</RetryButton>
          </ErrorContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default ErrorCard
