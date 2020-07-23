import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from '../src/HookApp';
// import { CounterApp } from './componentes/01-useState/CounterApp';
// import { CounterWithCustomHook } from './componentes/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './componentes/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './componentes/02-useEffect/formWithCustomHook';
// import { MultipleCustomHooks } from './componentes/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './componentes/04-useRef/FocusScreen';
// import { RealExampleRef } from './componentes/04-useRef/RealExampleRef';
// import { Layout } from './componentes/05-useLayoutEffect/Layout';
// import { Memorize } from './componentes/06-memos/Memorize';
// import { MemoHook } from './componentes/06-memos/MemoHook';
// import { CallbackHook } from './componentes/06-memos/CallbackHook';
// import { Padre } from './componentes/07-tarea-memo/Padre';
// import { TodoApp } from './componentes/08-useReducer/TodoApp';
import { MainApp } from './componentes/09-useContext/MainApp';

import './bootstrap/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <RealExampleRef /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    {/* { <TodoApp /> } */}
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);