import { FaHeart, FaRegBookmark, FaBookmark, FaTrashAlt } from 'react-icons/fa'

const Post = () => {
  return (
    <section className='post'>
      <div className='post__main-content'>
        <h3 className='post__title'>
          Good title{' '}
          <button className='btn'>
            <FaTrashAlt size={'2rem'} />
          </button>
        </h3>
        <p className='post__description'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ut et
          dignissimos illo culpa quibusdam sapiente placeat dolorum reiciendis
          rem, illum eveniet explicabo recusandae deleniti ea nam fuga unde
          inventore ducimus distinctente temporibus nemo nesciunt eos? Et a
          earum sapiente voluptate qui?
        </p>
      </div>

      <div className='post__info'>
        <div className='post__infteractions'>
          <button className='btn btn__post-reaction'>
            123
            <FaHeart color='red' />
          </button>

          <button className='btn btn__post-reaction'>
            <FaRegBookmark />
            <FaBookmark />
          </button>

          <button className='btn btn--add-comment'>add comment + </button>
        </div>

        <div className='post__author-wrapper'>
          <p className='post__author'>Created by Tedd</p>
          <p>2022,07,12 22:10:00</p>
        </div>
      </div>
    </section>
  )
}

export default Post
