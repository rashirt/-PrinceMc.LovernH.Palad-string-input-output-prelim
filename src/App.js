import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutputValue(inputValue);
    setInputValue(''); // Clear input after submission
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a string" 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {outputValue && <h1 style={styles.output}>{outputValue}</h1>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
  },
  output: {
    marginTop: '20px',
  },
};

export default App;