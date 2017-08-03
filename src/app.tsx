import * as React from 'react';

const electron = require('electron');
const remote = electron.remote;
const mainProcess = remote.require('./main');

export default class App extends React.Component {
  render() {
    return (<div>
      <button onClick={() => mainProcess.selectResultsDirectory((dir: string) => {
        console.log('dir', dir);
        })} type="button">Save The File</button>
    </div>);
  }
}