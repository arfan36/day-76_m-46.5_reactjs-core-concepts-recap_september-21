import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="NoaKhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="Moyna and modi"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Power: {power}</h4>
      <p>Specialty: {props.special}</p>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;
