import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header  from './Core/Components/Header/';
import Footer  from './Core/Components/Footer/';

class App extends Component<any, any> {
  public async componentDidMount(): Promise<void> {}

  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          
          <Switch>
          {/* <Route
            path="/"
            exact={true}
            component={}
          /> */}
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
