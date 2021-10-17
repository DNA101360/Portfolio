import './App.css';
import store from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from './components/header'

/** NOTES
 * The <Provider> component makes the Redux store available to any nested components 
 * that need to access the Redux store.
 */


function App() {
  return (
    <Provider store={store}> 
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
