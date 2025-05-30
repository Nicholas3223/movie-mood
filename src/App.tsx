import {store} from './app/store';
import {Provider} from 'react-redux';

import Movies from './features/movies';

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  )
}

export default App
