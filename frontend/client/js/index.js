import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './components/toggle.js';

import '../sass/main.scss';

const root = document.querySelector('.container');

ReactDOM.render(
    <Reaggle
        apiRoot="https://reaggle.herokuapp.com/api/entries/"
        interval="2000" />,
    root
);
