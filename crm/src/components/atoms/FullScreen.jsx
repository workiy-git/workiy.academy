import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/logincss/header.css';

const FullScreen = () =>{
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [logoData, setLogoData] = useState([]);

  const toggleFullScreen = () => {
    const elem = document.documentElement;

    if (!isFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    document.title = 'Logo';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:9000/api/fullscreen')
      .then((response) => {
        console.log('Data received:', response.data);
        setLogoData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return(

    <div className='header_button'>
      {logoData.map((item, index) => (
        <div key={index} className="fullscreen">
        <button id="exitFullscreenButton" className="header_buttons">
        <img className="full_screen_img" alt="" src={`data:image/jpg;base64, ${item.fullscreen_icon}`} onClick={toggleFullScreen} />
        </button>
        </div>
      ))}
    </div>
  );
};

export default FullScreen;