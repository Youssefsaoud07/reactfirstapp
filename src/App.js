import logo from './logo.svg';
import './App.css';
import {Button ,Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FacebookLoginButton } from "react-social-login-buttons";


function App() {
  return (
      <Form className="Login-form">
          <h1>
              <span className='font-weight-bold' >connectez-vous</span>
          </h1>
          <h2 className="text-center">Welcom</h2>
          <FormGroup className="App-header">
              <FormLabel>E-mail</FormLabel>
              <FormControl type="email" placeholder="type your email" />
          </FormGroup>  
          <FormGroup className="App-header">
              <FormLabel>password</FormLabel>
              <FormControl type="password" placeholder="***********" />
          </FormGroup>
          <FormGroup className="App-header">
              <FormLabel>Name</FormLabel>
              <FormControl type="text" placeholder="type your name" />
          </FormGroup>
          <FormGroup className="App-header">
              <FormLabel>last name</FormLabel>
              <FormControl type="text" placeholder="type your Last name" />
          </FormGroup>  
          <FormGroup controlId="formBasicRangeCustom">
              <FormLabel>experience</FormLabel>
              <FormControl type="range" custom />
          </FormGroup>

          <Button variant="primary" type="submit">
              Submit
          </Button>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              
      
    </Form>
  );
}

export default App;
