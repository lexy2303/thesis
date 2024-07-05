import * as React              from 'react';
import { useParams, Link }     from 'react-router-dom';
import { useState, useEffect } from 'react';
import KeyboardBackspaceIcon   from '@mui/icons-material/KeyboardBackspace';
import UndoIcon                from '@mui/icons-material/Undo';
import bands                   from '../database';
import vinyl                   from '../../assets/images/vinyl-record.png';
import Lottie                  from 'lottie-react';
import animationData4          from '../../assets/animations/Animation4.json';

import './index.css';
import './mobile.css';

const RecordPlayer = () => {
  const { id }                        = useParams();
  const [volume, setVolume]           = useState(0.5);
  const [currentSide, setCurrentSide] = useState('sideA');

  const selectedBand = bands.find((band) => band.id === id);

  useEffect(() => {
    changeSong();
  }, [currentSide, selectedBand]);


  if (!selectedBand) {
    return <div>Band not found</div>
  }

  const changeSong = () => {
    const side = currentSide === 'sideA' ? selectedBand.song : selectedBand.secondSong;
    const playerSong = document.getElementById('player-song');

    if (selectedBand?.secondSong) {
      return playerSong.src = side;
    }
    playerSong.src = selectedBand.song;
  } 

  
  const flipRecord = () => {
    const record = document.getElementById('record');
    record.classList.toggle('record_is-flipped');

    setCurrentSide(() => (record.classList.contains('record_is-flipped') ? 'sideB' : 'sideA'));
    changeSong();
}

const playRecord = () => {
  const switcher      = document.getElementById('switcher');
  const switcherRed   = document.getElementById('switcher-red');
  const switcherGreen = document.getElementById('switcher-green');
  const tonearm       = document.getElementById('tonearm');
  const playerSong    = document.getElementById('player-song');
  const bandImg       = document.getElementById('band-img');
  const slider        = document.getElementById('slider');
  const record        = document.getElementById('record');
  const overlay       = document.getElementById('overlay');

  switcher.addEventListener('click', () => {
    switcher.classList.toggle('switcher_active')
    tonearm.classList.toggle('tonearm_active')
    bandImg.classList.toggle('band-img_active')
    record.classList.toggle('record_active')
    overlay.classList.toggle('record-overlay_active')

    if (record.classList.contains('record_is-flipped')) {
      record.style.animation = 'rotateCounterClockwise 5s linear infinite'
    }

    if (switcher.classList.contains('switcher_active')) {
      switcherGreen.classList.add('switcher-green_active')
      switcherRed.classList.remove('switcher-red_active')
      playerSong.play();
    } else {
      switcherGreen.classList.remove('switcher-green_active')
      switcherRed.classList.add('switcher-red_active')
      playerSong.pause();
    } 
  });

  slider.addEventListener("input", (e) => {
    playerSong.volume = Number(e.target.value);
  });
}

  return (
    <div className='record-player'>
      <Link to={`/record/${selectedBand.id}`}>
        <KeyboardBackspaceIcon
          className='record-back-button'
          sx={{
            width: '90px',
            height: '50px',
            color: 'white',
          }}
        />
      </Link>
      <div className="selected-artist-info">
        <h1 className="record-title">{selectedBand.name.toUpperCase()}</h1>
        <h2 className="record-subtitle">{selectedBand.albumName.toUpperCase()}</h2>
        <Lottie animationData={animationData4} loop={true} className="animation4"/>
      </div>
      <div className="turntable" id="turntable">
        <div className="record" id="record">
          <img className="band-img" src={selectedBand.imgUrl} alt="img" id="band-img"></img>
          <div class="record-overlay" id="overlay"></div>
          <div className="record-center"></div>
        </div>
        <div className="tonearm" id="tonearm">
          <div className="control"></div>
          <div className="control-axis"></div>
          <div className="control-head"></div>
        </div>
          <div className="slider-container">
            <input
              type="range"
              id="slider"
              className="slider"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
      </div>
      <div className="flip-button-box" onClick={flipRecord}>
        <UndoIcon
          className="undo-icon"
          sx={{
            width: '70px',
            height: '31px',
            color: 'black',
          }}>
          </UndoIcon>
        <img src={vinyl} alt="img" className="flip-img" />
      </div>
      <div className='switcher-wrapper' id='switcher-wrapper'>
        <div className='switcher' id="switcher" onClick={playRecord}/>
          <span className="switcher-red" id='switcher-red'></span>
          <span className="switcher-green" id='switcher-green'></span>
      </div>
      <audio src={selectedBand.song} id='player-song' className="player-song" loop preload="auto"></audio>
    </div>
  );
};

export default RecordPlayer;
