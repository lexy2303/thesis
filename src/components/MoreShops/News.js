import { Link }              from 'react-router-dom';
import FavoriteBorderIcon    from '@mui/icons-material/FavoriteBorder';
import SendIcon              from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon    from '@mui/icons-material/BookmarkBorder';
import './index.css';

const MoreShops = ({ vinyls }) => {
  return (
    <>
      <div className="news-container">
        <div className="insta-container">
          <div className="username-container">
            <div className="username-info">
              <img className="user-img" src={vinyls.userImg} alt="img"/>
              <div className="location">
                <div className='username'>{vinyls.userName}</div>
                <div className="user-location">{vinyls.location}</div>
              </div>
            </div>
            <div className="more">...</div>
          </div>
          <Link to={vinyls.url}>
            <img className="post" src={vinyls.mainImg} alt="img" />
          </Link>
          <div className="icons">
            <div className="icons-box">
              <div><FavoriteBorderIcon style={{color: 'white'}} /></div>
              <div><ChatBubbleOutlineIcon  style={{color: 'white'}} /></div>
              <div><SendIcon style={{color: 'white'}} className="send" /></div>
            </div>
            <BookmarkBorderIcon style={{ color: 'white', width: '30px', height: '30px' }}/>
          </div>
          <div className="likes-container">
            <img className="users-img" src={vinyls.userImg} alt="img"/>
            <div className="likes">{vinyls.likes} likes</div>
          </div>
          <div className="caption">
            <div className="users">{vinyls.userName}</div>
            {vinyls.caption}
          </div>
          <div className="view">View all 10 comments</div>
          <div className="comment">Add a comment...</div>
        </div>
      </div>
    </>
  )
}

export default MoreShops;
