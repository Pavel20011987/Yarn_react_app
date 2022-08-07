import React from 'react';
import logo from './logo.svg';
import './App.css';

const InnerComponent = ({hide}) => {
  if(hide) return null;
  return <div>Name: Anna</div>
}

function Welcome(props) {
  return props.children;

  // return props.children || 'default text'

  // if(props.children){
  //   return <div>{props.children}</div>
  // } else {
  //   return <div>default text</div>
  // }

  // return (
  //   <div>default text</div>
  // )

  // return (
  //   <div>
  //     {props.children ? props.children : 'default text'}
  //   </div>
  // )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome>
          <InnerComponent hide={true} />
        </Welcome>
        <Welcome>
          <InnerComponent hide={false}/>
        </Welcome>
        <p>
          Hello World !!!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
