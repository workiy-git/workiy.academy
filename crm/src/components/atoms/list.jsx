import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/logincss/header.css';

const handleDocumentClick = (event) => {
  const dropdown = document.getElementById('dropdownList1');
  const image = document.getElementById('my_profile_img1');

  if (!dropdown.contains(event.target) && event.target !== image) {
    dropdown.style.display = 'none';
    document.removeEventListener('click', handleDocumentClick);
  }
};
const toggleDropdown = () => {
  const dropdown = document.getElementById('dropdownList1');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
    document.addEventListener('click', handleDocumentClick);
  }
};

function Logo() {
  const [logoData, setLogoData] = useState([]);

  useEffect(() => {
    document.title = 'Logo';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:9000/api/list')
      .then((response) => {
        console.log('Data received:', response.data);
        setLogoData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='header_button'>
      {logoData.map((item, index) => (
        <div key={index}>
          <button className="my_profile_img_button">
            <img id="my_profile_img1" className="clickable-image"  alt="" src={`data:image/jpg;base64, ${item.list_icon}`} onClick={toggleDropdown} />
          </button>
          <div className="dropdown_main">
            <ul className="dropdown" id="dropdownList1">
          {Object.keys(item).map((key) => (
            <p key={key}>{item[key]}</p>
          ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logo;

