import logo from './logo.svg';
//import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();
   }, []); 

  return (
    <div className="App">
      Home Page
      <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active-menu">Albums</NavLink></p>

      <Switch>
        <Redirect exact from="/home" to="/"></Redirect>
        <Redirect exact from="/post-list/:postId" to="/posts/:postId"></Redirect>

        <Route exact path="/" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
    </div>
  );
}

export default App;
