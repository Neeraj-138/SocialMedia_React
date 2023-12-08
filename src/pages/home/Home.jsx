import Stories from '../../components/stories/Stories'
import './home.scss'
import Posts from '../../components/posts/Posts'

function home() {
  return (
    <div className='home'>
        <Stories/>
        <Posts/>     
    </div>
  )
}

export default home