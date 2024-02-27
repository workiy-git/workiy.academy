import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Logo() {
  const [logoData, setLogoData] = useState([]);

  useEffect(() => {
    document.title = 'Logo';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  useEffect(() => {
    axios.get('http://localhost:9000/api/headerdata')
      .then((response) => {
        console.log('Data received:', response.data);
        setLogoData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {logoData.map((item) => (
        <div key={item._id}>
          <h1>{item.text}</h1>
        </div>
      ))}
    </div>
  );
}

export default Logo;
