import './App.css';
import List from './components/List/List';
import Details from "./components/Details/Details";
import { useState } from 'react';

function App() {
  const [active, setActive] = useState({id: undefined});
  const [prevActiveElement, setPrevActiveElement] = useState();

  function callbackList(event, item) {
    if (prevActiveElement) {
      prevActiveElement.classList.remove('user__name-active');
    }

    event.target.classList.add('user__name-active');
    setPrevActiveElement(event.target);
    setActive(item);
  }

  return (
    <div className="user">
      <List callback={callbackList} />
      <Details info={active} />
    </div>
  );
}

export default App;
