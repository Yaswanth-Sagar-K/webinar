import React, { useEffect, useState, useRef, useContext, createContext, useMemo, useCallback } from 'react';

const UserContext = createContext();

const ReactHooks = () => {

    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  const username = 'Yaswanth'

    useEffect( () => {
        console.log(`current count is : ${count}`)
    }, [count]);

     useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

   const pauseTimer = () => setIsRunning(false);
  const resumeTimer = () => setIsRunning(true);
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  const [number, setNumber] = useState(1);
  const [show, setShow] = useState(true);

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => {
      if (n <= 0) return 1;
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    };
    return calculateFactorial(number);
  }, [number]); 

  return (
    <>
   <div style={{ padding: '20px' }}>
      <h2>React Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        ➖ Decrease
      </button>
    </div>

    <div style={{ padding: '20px' }}>
      <h2>⏳ Timer Counter</h2>
      <h3>{seconds} second{seconds !== 1 ? 's' : ''}</h3>

      <div style={{ marginTop: '10px' }}>
        {isRunning ? (
          <button onClick={pauseTimer}>⏸️ Pause</button>
        ) : (
          <button onClick={resumeTimer}>▶️ Resume</button>
        )}
        <button onClick={resetTimer} style={{ marginLeft: '10px' }}>🔁 Reset</button>
      </div>
    </div>

     <UserContext.Provider value={username}>
        <div style={{ padding: '20px' }}>
          <h2>👤 User Info</h2>
          <DisplayUsername />
        </div>
      </UserContext.Provider>

      <div>
      <p>Factorial of {number} is <strong>{factorial}</strong></p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Component
      </button>
      {show && <p>This is a toggleable component</p>}
    </div>
    </>
  )
}

const DisplayUsername = () => {
  const user = useContext(UserContext);
  return <p>Welcome, <strong>{user}</strong>!</p>;
};

export default ReactHooks