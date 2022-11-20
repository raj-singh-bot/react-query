import './App.css';
import { useQuery } from '@tanstack/react-query'
import Form from './Form';

function App() {
  const {data} = useQuery(['todo'], async () => await(await fetch('http://localhost:8000/todo')).json())

  console.log('data',data)
  return (
   <>
   {data && data.data && data.data.map((todo) => <li key={todo.id} >{todo.title}</li>)}
   <Form/>
   </>
  );
}

export default App;
