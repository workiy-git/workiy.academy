import React from 'react';
// import Logo from '../atoms/logo';
import MyProfile from '../atoms/MyProfile';
import List from '../atoms/list'
import FullScreen from '../atoms/FullScreen';

function Header() {
  return (
  <div className='header_main'>
   <MyProfile/>
   <List/>
   <FullScreen/>
  </div>
  );
}

export default Header;