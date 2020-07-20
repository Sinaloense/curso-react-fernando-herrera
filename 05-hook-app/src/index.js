import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from '../src/HookApp';
// import { CounterApp } from './componentes/01-useState/CounterApp';
// import { CounterWithCustomHook } from './componentes/01-useState/CounterWithCustomHook';
import { SimpleForm } from './componentes/02-useEffect/SimpleForm';

import './bootstrap/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById('root')
);
