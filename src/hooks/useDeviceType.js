import { useState, useEffect } from 'react';

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const checkDevice = () => {
      const ua = navigator.userAgent;
      
      // Detailed user agent checks for mobile and tablet
      const isMobileUA = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua);
      const isTabletUA = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua);
      
      const width = window.innerWidth;
      
      if (isMobileUA || width < 768) {
        setDeviceType('celular'); // Mobile / Cellphone
      } else if (isTabletUA || (width >= 768 && width < 1024)) {
        setDeviceType('tablet');
      } else {
        setDeviceType('laptop'); // Laptop / Desktop
      }
    };

    // Run check initially
    checkDevice();

    // Listen to resize events
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return {
    deviceType,
    isCelular: deviceType === 'celular',
    isTablet: deviceType === 'tablet',
    isLaptop: deviceType === 'laptop',
  };
}
