// import { createContext } from 'react';
import './App.css';
// import First from './class_components/First';
// import Second from './class_components/Second';
// import Third from './class_components/Third';
// import Parent from './class_components/child to parents props/Parent';
// import Login from './class_components/Conditinal Rendering/Login';
// import Lists from './class_components/Lists and keys/Lists';
// import Toggle from './class_components/Toggle/Toggle';
// import Style from './class_components/Style formets/Style';
// import Form from './class_components/Form handelling using class/Form';
// import UseState from './function_components/react_hooks/UseState';
// import UseStateArray from './function_components/react_hooks/UseStateArray';
// import UseStateObject from './function_components/react_hooks/UseStateObject';
// import ShortCirEval from './function_components/react_hooks/ShortCirEval';
// import Form from './function_components/formValidation/Form';
// import UseEffect1 from './function_components/useEffect_hooks/UseEffect1';
// import UseEffect2 from './function_components/useEffect2/UseEffect2';
// import Counter from './function_components/counter/Counter';
// import UseRef from './function_components/UseRef/UseRef';
// import UseReducerHook from './function_components/UseReducer/UseReducerHook';
import ComA from './function_components/UseContext/ComA';






// this is for context api

// import Context1 from './function_components/Context_Api/Context1'
// const FirstName=createContext();
// export const lastName=createContext();



function App() {
  return (
    
    <div className='App'>
      {/* <First name="amit" age="32" />
      <Second name="practice" goal="3" /> */}
      {/* <Third /> */}
      {/* <Parent /> */}
      {/* <Login /> */}
      {/* <Lists /> */}
      {/* <Toggle /> */}
      {/* <Style myClass={true}/> */}
      {/* <Form /> */}
      {/* <UseState /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCirEval /> */}
      {/* <Form /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      {/* <Counter /> */}
      {/* <UseRef /> */}
      {/* <UseReducerHook /> */}


      {/* // this is for context api */}
      {/* <FirstName.Provider value={'Sending from app ..'}>
      <lastName.Provider value={'Amit'}>
          <Context1 /> 
      </lastName.Provider>
      </FirstName.Provider> */}
      {/* // this is for context api */}

      {/* This is for UseContext */}

      <ComA />

    </div>
    
  );
}

export default App;

// export {FirstName,lastName};
