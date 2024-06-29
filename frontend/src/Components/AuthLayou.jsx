import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLayou = ({ children, path }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const authStatus = JSON.parse(localStorage.getItem('users'));

    const timer = setTimeout(() => {
      setLoader(false);
      if (authStatus !== null) {
        navigate(path);
      } else {
        navigate('/login');
      }
    }, 1000); 

    return () => clearTimeout(timer);
  }, [navigate, path]);

  return loader ? <h1>Loading ....</h1> : <> {children}</>;
};

export default AuthLayou;
