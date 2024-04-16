import React from 'react';
import { endpoints } from '../components/endpoints';

const NavMenu = () => {
  return (
    <div id='navmenu'>
      <h2>Endpoints</h2>
      {
        endpoints.map((endPoint, index) => (
          <p key={endPoint.id}>{endPoint.method}: <span>{endPoint.endpoint}</span></p>
        ))
      }
    </div>
  );
}

export default NavMenu;
