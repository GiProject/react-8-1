import { useState }  from 'react'
import './App.css';
import List from './Components/List';
import Detail from './Components/Details';
import useFetch from './Hooks/useFetch';


function App() {
  const initialUrl= "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
  const [item, setItem] = useState(null);
  const [{data, isLoading, hasError}] = useFetch(initialUrl);

  return (
    <div className="App">
      { 
        isLoading ? <h2>loading...</h2> : <List list={data} item={item} setItem={setItem} />
      }   
        <Detail item={item}  /> 
    </div>
  );
}

export default App;