import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../redux/actions";
import { Link }            from "react-router-dom";
import { useSelector }     from 'react-redux'
import Lottie              from 'lottie-react';
import Snackbar            from '@mui/material/Snackbar';
import IconButton          from '@mui/material/IconButton';
import CloseIcon           from '@mui/icons-material/Close';
import PermIdentityIcon    from '@mui/icons-material/PermIdentity';
import FavoriteIcon        from '@mui/icons-material/Favorite';
import bands               from '../database';
import Album               from "../Album/Album";
import Header              from "../Header/Header";
import Footer              from '../Footer/Footer';
import Dropdown            from "../Dropdown/Dropdown";
import SignInForm          from "../SigninForm/SigninForm";
import LikedVinyls         from "../LikedVinyls/LikedVinyls";
import animationData14     from '../../assets/animations/Animation14.json';
import RegisterForm        from "../RegisterForm.js/RegisterForm";
import SignupFormSuccess   from "../SignupFormSuccess/SignupFormSuccess";
import RegisterFormSuccess from "../RegisteredFormSuccess/RegisteredFormSuccess";

import './index.css';
import './mobile.css';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre]         = useState('Genre');
  const [selectedPrice, setSelectedPrice]         = useState('Over 25$');
  const [search, setSearch]                       = useState('');
  const [selectedSortOrder, setSelectedSortOrder] = useState('Sort by');
  const [selectedFormat, setSelectedFormat]       = useState('Format');
  const [isLoginModalOpen, setLoginModalOpen]     = useState(false);
  const [state, setState]                         = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })
  const [formIsSumbitted, setFormIsSubmitted]     = useState(false);
  const [currentForm, setCurrentForm]             = useState('login');
  const [errors, setErrors]                       = useState({});
  const [showPassword, setShowPassword]           = useState(false);
  const [dataIsCorrect, setDataIsCorrect]         = useState(false);
  const [values, setValues]                       = useState({
    userName:"", 
    password: "",
  });

    const [registerValues, setRegisterValues]     = useState({
      fullName: "",
      email: "",
      password: "",
  });

  const submitForm = () => {
    setFormIsSubmitted(true);
  }

  const handleSignUpForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleForm = () => {
    if (currentForm === 'login' && !isAuthenticated) {
      return <SignInForm
          submitForm={submitForm}
          handleSignUpForm={handleSignUpForm}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          dataIsCorrect={dataIsCorrect}
          setDataIsCorrect={setDataIsCorrect}
        />
    }
    if (currentForm === 'registered' && !isAuthenticated) {
      return <RegisterForm
              submitForm={submitForm}
              handleSignUpForm={handleSignUpForm}
              registerValues={registerValues}
              setRegisterValues={setRegisterValues}
              errors={errors} setErrors={setErrors}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              dataIsCorrect={dataIsCorrect}
              setDataIsCorrect={setDataIsCorrect}
            />
    }
    if (currentForm === 'login' && isAuthenticated) {
      return <SignupFormSuccess />
    }
    if (currentForm === 'registered' && isAuthenticated) {
      return <RegisterFormSuccess />
    }
  }

  const { vertical, horizontal, open } = state;
  
  const likedVinyls     = useSelector((state) => state.likedVinyls);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const openLoginModal      = () => setLoginModalOpen(true);  
  const closeLoginModal     = () => setLoginModalOpen(false);
  
  const handleSnackBarClick = () => { setState({ ...state, open: true }) }
  const handleSnackBarClose = () => { setState({ ...state, open: false }) }

  const genres = [...new Set(bands.map(band => band.genre))].sort();
  const prices = [...new Set(bands.map(band => band.cost))];

  const topChartsAlbums = bands.slice(0, 5);

  const filteredBands = bands.filter(band => 
    (selectedGenre  === 'Genre'    || band.genre  === selectedGenre) &&
    (selectedPrice  === 'Over 25$' || band.cost   <= selectedPrice) &&
    (selectedFormat === "Format"   || band.format === selectedFormat) &&
    (search         === ''         || band.name.includes(search)))
    .sort((a, b) => {
      if (selectedSortOrder === 'lowToHigh') {
        return a.cost - b.cost;
      } else if (selectedSortOrder === 'highToLow') {
        return b.cost - a.cost
      } else if (selectedSortOrder === 'alphabeticalA') {
        return a.name.localeCompare(b.name);
      } else if (selectedSortOrder === 'alphabeticalB') {
        return b.name.localeCompare(a.name);
      }
      return null;
    })

  const products = filteredBands.length;

  const handleModal = () => {
    const modal = document.getElementById('myModal');
    const btn   = document.getElementById('myBtn');
    const span  = document.getElementById("close");
  
    btn.addEventListener('click', () => {
      modal.style.display = "flex";
    })
  
    span.addEventListener('click', () => {
      modal.style.display = "none";
    })
    
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
  }

  const handleAlbums = () => (
    <div className="album-container">
      {filteredBands.length === 0 
        ? ( search !== '' 
        ? ( <p className="no-match-found">No matching records found for your search.</p>) 
        : (<p className="no-match-found">No matching records found.</p>)
      ) : (
        filteredBands.map((band) => (
          <Album
            key            = {band.id}
            band           = {band}
            handleClick    = {handleSnackBarClick}
            openLoginModal = {() => setLoginModalOpen(true)} 
          />
        ))
      )}
    </div>
  );

  const action = (
    <Fragment>
      <IconButton
        size      ="small"
        aria-label="close"
        color     ="inherit"
        onClick   ={handleSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  const handleMissingModalContent = () => {
    if (likedVinyls.length === 0) 
    return (
      <div className="wishlist-container">
        <div className="wishlist-title">Your wishlist is empty!</div>
        <div className="wishlist">Explore more and shortlist some items</div>
      </div>
    )
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.text');

    const checkVisibility = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        
        if (rect.top <= windowHeight * 0.8) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userName = localStorage.getItem('userName');
    
    if (isAuthenticated && userName) {
      dispatch(loginSuccess());
    }
  }, [dispatch]);
  
  const handleLogout = () => {
    dispatch(logout());
  
    // Clear localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');  
  };

  return (
    <div className="record-colection">
      <div className="links-container">
        <Link to="/news" className='link'>
          <div className="news-link">Stores</div>
        </Link>
        {
          isAuthenticated && (
          <div className="liked-container">
              <FavoriteIcon
                id="myBtn"
                onClick={isAuthenticated ? handleModal : openLoginModal}
                sx={{ fontSize: 35, color: 'black' }}
              />
              <PermIdentityIcon
                id="myBtn"
                onClick={handleLogout}
                sx={{ fontSize: 40, color: 'black' }}
              />
              <div>{values.userName || registerValues.fullName}</div>
          </div>
          )
        }
      </div>
      <Header />
      <div id="myModal" className="modal">
        <span className="close" id="close">&times;</span>
        <div className="modal-content">
          {handleMissingModalContent()}
          { 
            likedVinyls.map((band) => (
              <LikedVinyls band={band} />
            ))
          }
        </div>
      </div>
      <Snackbar
        open            ={open}
        autoHideDuration={4000}
        anchorOrigin    ={{ vertical, horizontal }}
        onClose         ={handleSnackBarClose}
        message         ="Added to favorites"
        action          ={action}
        key             ={vertical + horizontal}
      />

      {
        isLoginModalOpen && (
          <div id="loginModal" className="modal" style={{ display: 'flex' }}>
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <div className="modal-content">
              {
                handleForm()
              }
            </div>
          </div>
        )
      }

      <div className="main-albums-container">
        <div className="top-albums-container">
          <div className="top-albumns-content">
            <div className="albums">
              <div className="top-albums-title">
                TOP ALBUMS 2024
              </div>
            {
              topChartsAlbums.map((band) => (
                <Link to={`record/${band.id}`} key={band.id} className='link'>
                  <div className="album-names">
                    <div className="text fade-in artist-names">{band.albumName.toUpperCase()}
                    </div>
                      <div className="text fade-in artists-number">
                        {band.number}.
                      </div>
                  </div>
                </Link>
              ))
            }
            </div>
          </div>
          <Lottie animationData={animationData14} loop={true} className="record-animation"/>
        </div>
        <div>
          <div className="container">
            <div className="info">
              <div className="main-text-container">
                <div className="text fade-in title">ESSENTIAL ALBUMS
                </div>
                <div className="text fade-in sub-title">Missed one of those? They are back!</div>
              </div>
              <Dropdown
                setSearch           = {setSearch}
                setSelectedPrice    = {setSelectedPrice}
                setSelectedGenre    = {setSelectedGenre}
                setSelectedFormat   = {setSelectedFormat}
                setSelectedSortOrder= {setSelectedSortOrder}
                genres              = {genres}
                prices              = {prices}
                selectedGenre       = {selectedGenre}
                selectedPrice       = {selectedPrice}
                selectedFormat      = {selectedFormat}
                selectedSortOrder   = {selectedSortOrder}
              />
            </div>
            {handleAlbums()}
            <div className='products'>{products} products</div>
          </div>
        </div>
      </div>
        <div className="top-artists">
          <div className="top-artists-title">
            TOP ARTISTS 2024
          </div>
          <div className="top-artists-content">
            <div className="artist">
            {
              topChartsAlbums.map((band) => (
                <Link to={`record/${band.id}`} key={band.id} className='link'>
                  <div className="band">
                    <div className="text fade-in number">{band.number}.</div>
                    <div className="text fade-in artists-names">{band.name.toUpperCase()}</div>
                  </div>
                </Link>
              ))
            }
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home;
