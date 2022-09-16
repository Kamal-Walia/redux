import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import FunctionalComponent from './components/FunctionalComponent'
import {Provider} from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      <FunctionalComponent />
    </Provider>
    
  );
}

export default App;
