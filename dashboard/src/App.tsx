import React, { useState, useEffect } from "react";
import UniqueHolderPercentageChart from "./Charts/UniqueHolderPercentageChart";
import UniqueHoldingWalletsChart from "./Charts/UniqueHoldingWalletsChart";
import DistributionPercentageChart from "./Charts/DistributionPercentageChart";
import "./App.css";
/**
 * The main front-end component which displays all the charts. 
 * In this functional component, metakey_list is used to store the list of metakey data which is retrived from the /api endpoint of the backend FLASK.
 * the status state acts as a error message state which improves the UI/UX of the page by displaying a message duing error.
 * @returns HTML tags
 */
function App() {
  
  const [metakey_list, setMetakeyList] = useState([]);
  const [status, setSatus] = useState("initial");
  useEffect(() => {
    //Changes are made to this URL according to deployment and testing. For deployment https://serene-plains-58099.herokuapp.com/api
    // and for unit testing https://127.0.0.1:5000/api
    fetch("http://127.0.0.1:5000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSatus("OK");
        setMetakeyList(data);
      })
      .catch((error) => {
        setSatus("ERROR");
        console.log(error);
      });
  }, []);
  if (status === "ERROR") {
    return (
      <div className="App">
        <div className="App-header">Internal Server Error</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="App-header">Metakey Data Analysis</div>
        <div className="Charts">
          <h3>Unique Holders Percentage For Each Metakey Edition</h3>
          <UniqueHolderPercentageChart {...metakey_list} />
          <h3>Unique Holding Wallets Numbers For Each Metakey Edition</h3>
          <UniqueHoldingWalletsChart {...metakey_list} />
          <h3>Distribution Percentage Metakey Edition</h3>
          <DistributionPercentageChart {...metakey_list} />
        </div>
      </div>
    );
  }
}
export default App;
