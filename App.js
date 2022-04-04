import { StateProvider } from './src/context/StateProvider';
import reducer, {inicialState} from './src/context/reducer';
import  Homescreen from './src/screens/Homescreen'

export default function App() {
  return (
    <StateProvider inicialState={inicialState} reducer ={reducer}> 
      <Homescreen />
   </StateProvider>
  
  );
}


