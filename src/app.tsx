import * as React from 'react';
import Editor from './editor';

export default class App extends React.Component {
  render() {
    return (<div>
      <Editor/>
      <a href="https://willowtreeapps.com/careers">Come work with me.</a>
    </div>);
  }
}