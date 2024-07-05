import Header from '../Header'
import LeftPane from '../LeftPane'
import Banner from './Banner'
import ResultContainer from './Result'

import {ContentContainer, RightPane} from './styling'

const Home = () => (
  <>
    <Header />
    <ContentContainer>
      <LeftPane />
      <RightPane>
        <Banner />
        <ResultContainer />
      </RightPane>
    </ContentContainer>
  </>
)

export default Home
