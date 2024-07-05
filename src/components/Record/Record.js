import * as React                from 'react';
import { useEffect }             from 'react';
import { useParams }             from 'react-router-dom';
import { Link }                  from 'react-router-dom';
import KeyboardBackspaceIcon     from '@mui/icons-material/KeyboardBackspace';
import Lottie                    from 'lottie-react';
import ReviewSection             from '../ReviewSection/ReviewSection';
import bands                     from '../database';
import btn                       from '../../assets/images/play-button.png';
import animationData6            from '../../assets/animations/Animation6.json';
import animationData7            from '../../assets/animations/Animation7.json';

import './index.css';
import './mobile.css';

const Record = () => {
  const { id } = useParams();
  const selectedBand = bands.find((band) => band.id === id);

  useEffect(() => {
    const elements = document.querySelectorAll('.text');

    const checkVisibility = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        
        if (rect.top <= windowHeight * 0.9) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="main-record-container">
      <div className="back">
        <Link to="/">
          <KeyboardBackspaceIcon
            sx={{
              width: '90px',
              height: '50px',
              color: 'black',
            }}
          />
        </Link>

      </div>
      <div className="main-artist-info-box">
        <div class="img-magnifier-container">
          <div className="main-artist-info">
            <div className="main-info-box">
              <Link to={`record-player/${selectedBand.id}`} key={selectedBand.id} className="record-link">
                <img src={btn} className='play-button' alt='play' />
              </Link>
              <div className='title-box'>
                <div className='main-artist-name'>{selectedBand.name.toUpperCase()}</div>
                <div className='main-album-name'>{selectedBand.albumName.toUpperCase()}</div>
                <div className="genre">{selectedBand.genre.toUpperCase()}</div>
              </div>
            </div>
            <div className='selected-band-info'>{selectedBand.info}</div>
          </div>
          <div className='turning-record'>
            <div className="records" id="record">
            <img className="bands-image" src={selectedBand.imgUrl} alt="img" id="band-img"></img>
            <div class="overlay"></div>
            <div className="records-center"></div>
          </div>
        </div>
        </div>
      </div>
      <div className='text fade-in tracklist-title'>TRACKLIST</div>
      <div className='main-tracklist-box'>
        <div className='tracklist-content-box-A'>
          <div className='vinyl-box-A'>
            <Lottie animationData={animationData7} loop={true} className="text fade-in animation2"/>
            <div className="listA-content">
              <ol className="listA">{selectedBand.trackListA?.map((e) => <li className='text fade-in'>{e.toUpperCase()}</li>)}</ol>
              <h2 className="text fade-in header">A</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='tracklist-content-box-B'>
        <div className='vinyl-box-B'>
          <div className="listB-content">
            <ol className="listB">{selectedBand.trackListB?.map((e) => <li className='text fade-in'>{e.toUpperCase()}</li>)}</ol>
            <h2 className="text fade-in header">B</h2>
          </div>
          <Lottie animationData={animationData6} loop={true} className="text fade-in animation6"/>
        </div>
      </div>

      <div className="review-content">
        <ReviewSection bandId={selectedBand.id} />
      </div>
    </div>
  )
}

export default Record;
