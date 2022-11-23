
import './App.css';

import Welcome ,{Bye}from './components/Welcome';
import ClassComponets,{NewClass} from './components/ClassComponents';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Bye />
      <ClassComponets />
      < NewClass/>
    </div>
  );
}

export default App;
