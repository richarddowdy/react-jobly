import { useState, useEffect } from 'react';

function useLocalStorage(key){
  let initialValue = JSON.parse(localStorage.getItem(key)) || null;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key,value]);
  
  return [value, setValue];
};

export { useLocalStorage };