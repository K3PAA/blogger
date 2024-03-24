import Post from '../components/Post'

const Home = () => {
  const userLoggedIn = false

  return (
    <main className='home | container'>
      {!userLoggedIn && <p className='home__info'>Login to get full access</p>}
      <h2 className='home__title'>Welcome back, let's see what's new</h2>
      <div className='home__post-container'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default Home
