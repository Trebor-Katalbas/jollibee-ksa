import React, { useEffect, useState } from 'react';
import logo from '../../assets/Jollibe-Logo.png'; 

const LoadingScreen = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showLoadingScreen) {
    return null; 
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, 
      }}
    >
      <img src={logo} alt="Logo" style={{ maxWidth: '50%', maxHeight: '50%' }} />
    </div>
  );
};

export default LoadingScreen;
