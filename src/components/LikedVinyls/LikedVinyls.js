import { removeFromFavorites } from "../../redux/actions";
import { useDispatch }         from "react-redux";
import DeleteOutlineIcon       from '@mui/icons-material/DeleteOutline';
import './index.css';

const LikedVinyls = ({ band }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(removeFromFavorites(band.id));
  };

  return (
    <div>
      <div className="liked-bands-box">
        <img src={band.imgUrl} alt="img" className="liked-band-img" />
        <div className="liked-band-info">
          <div className="liked-band-name">{band.name}</div>
          <div className='album-name'>{band.albumName}</div>
          <DeleteOutlineIcon onClick={handleToggleFavorite} sx={{width: '30px', height: '30px'}} />
        </div>
      </div>
    </div>
  )
}

export default LikedVinyls;
