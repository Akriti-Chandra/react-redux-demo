import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeComponents';
import HooksCakeContainer from './components/HooksCakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import IcecreamComponent from './components/IcecreamComponent';
import NewCakeComponent from './components/NewCakeComponent';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <ItemContainer cake/>
    <ItemContainer/>
    <HooksCakeContainer/>
      {/* <CakeContainer/> */}
      <IcecreamComponent/>
      <NewCakeComponent/>
    </div>
    </Provider>
  );
}

export default App;
