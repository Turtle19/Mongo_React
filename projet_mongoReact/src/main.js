import React from 'react';
import ReactDOM from 'react-dom';
// import Client from '../components/client.js';
import Data from '../components/data.js';
var rendu =
  () =>
    ReactDOM.render(
      <Data />
      ,document.getElementById('data')
    );

window.addEventListener('DOMContentLoaded', rendu);
