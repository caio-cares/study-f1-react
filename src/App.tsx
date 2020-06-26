import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterElement  from './Core/Components/Footer/';

class App extends Component<any, any> {
  public async componentDidMount(): Promise<void> {}

  public render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Switch>
          {/* <Route
            path="/"
            exact={true}
            component={}
          /> */}
          </Switch>
        </BrowserRouter>

        <FooterElement />
      </div>
    );
  }
}

export default App;
