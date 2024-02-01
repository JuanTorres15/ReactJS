import React from 'react';
import ReactDOM from 'react-dom/client';


import App from "./App";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const el = document.getElementById("root");


const root = ReactDOM.createRoot(el);

root.render(<App/>);