import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TermsOfService from "./terms/TermsOfService";
import LandingPage from "./homepage/HomePage";
import Payment from "./payment/Payment";
import SignUpComplete from "./completed/SignUpComplete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <pre>{` revops.js `}</pre> sample application
        </header>
        <div className="content-main">
          <Route path="/" exact component={LandingPage} />
          <Route path="/terms" exact component={TermsOfService} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/complete" exact component={SignUpComplete} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
