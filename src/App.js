import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h1>Implementing Redux-Toolkit</h1>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
