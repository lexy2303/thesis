import { Link }                                from 'react-router-dom';
import { useDispatch, useSelector }            from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';
import FavoriteBorderIcon                      from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon                            from '@mui/icons-material/Favorite';
import './index.css';
import './mobile.css';

const Album = ({ band, handleClick, openLoginModal }) => {
  const dispatch        = useDispatch();
  const likedVinyls     = useSelector((state) => state.likedVinyls);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const isLiked         = likedVinyls.some((liked) => liked.id === band.id);
  
  const handleAddToFavorites = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(band.id));
    } else {
      handleClick();
      dispatch(addToFavorites(band));
    }
  }
  
  const handleLikeClick = () => {
    if (isAuthenticated) {
      handleAddToFavorites();
    } else {
      openLoginModal();  
    }
  }; 
  
  return (
    <div className='main-container'>
        <div className="album-box">
          <Link to={`record/${band.id}`} key={band.id} className='link'>
            <div className='album'>
              <div className='card' id="card">
                <img src={band.imgUrl} alt="img" className="img1" id="img1" />
              </div>
              <div className='outer'>
                <div className='inner'>
                  <img src={band.imgUrl} alt="img"/>
                </div>
              </div>
            </div>
          </Link>
          <div className="band-info">
            <div className="band-info">
            <Link to={`record/${band.id}`} key={band.id} className="info-link">
              <div className="band-title">{band.name}</div>
              <div className="album-name">{band.albumName}</div>
              <div className="cost">{band.cost}$</div>
            </Link>
              <div className="heart-icon" id="heart">
                {
                  isLiked 
                  ? <FavoriteIcon
                    sx={{ color: 'white', width: '35px', height: '35px'}}
                    className="h-icon"
                    id="fav-button"
                    onClick={handleLikeClick}
                  />
                  : <FavoriteBorderIcon
                    sx={{ color: 'white', width: '35px', height: '35px' }}
                    className="h-icon"
                    id="fav-button"
                    onClick={handleLikeClick}
                  />
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Album;
