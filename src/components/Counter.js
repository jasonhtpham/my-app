import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);
  return (
    <Container>
      <h2>You have been here for: {count} seconds</h2>
    </Container>
  );
}

export default Counter;
