import React, { useState, useEffect } from 'react';


// If we hae time, we might want to refactor to return true/false for logged in state
function useLocalStorage(key, getUser){
  let initialValue = JSON.parse(localStorage.getItem(key)) || null;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key,value]);
  
  

  return [value, setValue]
}

export { useLocalStorage };