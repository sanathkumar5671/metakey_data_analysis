import React, { useState, useEffect } from 'react';
import UniqueHolderPercentageChart from './Charts/UniqueHolderPercentageChart';
import UniqueHoldingWalletsChart from './Charts/UniqueHoldingWalletsChart';
import DistributionPercentageChart from './Charts/DistributionPercentageChart';
import './App.css';

function App() {
  const [metakey_list, setMetakeyList] = useState([]);
  const[status, setSatus] = useState('initial');
  useEffect(() => {
    fetch('/api').then(res => res.json())
    .then(data => {
      console.log(data);
      setSatus('OK')
      setMetakeyList(data)
    })
    .catch(error =>{
      setSatus('ERROR')
      console.log(error);
    });
  }, []);
  if(status === 'OK')
  {
    return (
      <div className="App">
        <div className="App-header" >
          Metakey Data Analysis
        </div>
        <div className='Charts'>
          <h3>Unique Holders Percentage For Each Metakey Edition</h3>
          <UniqueHolderPercentageChart {...metakey_list}/>
          <h3>Unique Holding Wallets Numbers For Each Metakey Edition</h3>
          <UniqueHoldingWalletsChart {...metakey_list}/>
          <h3>Distribution Percentage Metakey Edition</h3>
          <DistributionPercentageChart {...metakey_list}/>
        </div>

      </div>
    );
  }
  else
  {
    return (
      <div className="App">
        <div className="App-header">
        Internal Server Error
        </div>
      </div>
    );
  }
  }
export default App;
