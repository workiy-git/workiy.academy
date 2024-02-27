import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/logincss/header.css';

const handleDocumentClick = (event) => {
  const dropdown = document.getElementById('dropdownList');
  const image = document.getElementById('my_profile_img');

  if (!dropdown.contains(event.target) && event.target !== image) {
    dropdown.style.display = 'none';
    document.removeEventListener('click', handleDocumentClick);
  }
};
const toggleDropdown = () => {
  const dropdown = document.getElementById('dropdownList');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
    document.addEventListener('click', handleDocumentClick);
  }
};

function MyProfile() {
  const [myprofileData, setMyProfileData] = useState([]);

  useEffect(() => {
    document.title = 'Logo';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:9000/api/myprofiledata')
      .then((response) => {
        console.log('Data received:', response.data);
  
        // Save the entire response data object in a variable
        const allData = response.data;
  
        // Now you can use 'allData' as needed
        console.log('All data:', allData);
  
        // If you want to update the state with all data
        setMyProfileData(allData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
    

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount and cleans up on unmount

  return (
    <div className='header_button'>
      {myprofileData.map((item, index) => (
        <div key={index}>
          <button className="my_profile_img_button">
            <img id="my_profile_img" className="clickable-image" alt="" src={`data:image/jpg;base64, ${item.profile}`} onClick={toggleDropdown} />
            {/* <img id="my_profile_img" alt="" src={`data:image/jpg;base64, ${item.profile_img}`} onClick={toggleDropdown} /> */}
          </button>
          
          <div className="dropdown_main">
            <ul className="dropdown" id="dropdownList">
              {Object.keys(item).map((key) => (
                <li key={key}>{item[key]}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyProfile;
