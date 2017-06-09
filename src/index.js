import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";



const TestLayout = (props) => {
  return (
  	<div>
      <div>This is the layout of TEST</div>
      <hr />
      <div>{props.children}</div>
      <hr />      
      {" "}
      <NavLink to="/">/Home</NavLink>
      {" "}
      <NavLink to="/test">/test</NavLink>
      {" "}
      <NavLink to="/test/1">/test/1</NavLink>
      {" "}      
      [<NavLink to="/authorize">/authorize</NavLink>]
      {" "}  
      
      {" "}
      <NavLink to="/other">/other</NavLink>
      {" "}
      <NavLink to="/other/1">/other/1</NavLink>
      {" "}        
      
    </div>
  )
}

class Dashboard extends Component {
  

  
  render() {
    return (
      <h1>Hello 
        {this.props.match.params.id} 
      </h1>
    );
  }  
}  

export default Dashboard;



const App = () => (
  <BrowserRouter basename="/build">
    <Switch>
      
        <TestLayout>
          <Switch>        
            <Route path={"/"} exact component={Dashboard} />
            <Route path={"/test"} exact component={Dashboard} />
            <Route path={"/test/:id"} component={Dashboard} />
          </Switch>
        </TestLayout>
      
      
      
    
    </Switch>
  </BrowserRouter>

);

render(<App />, document.getElementById('root'));
