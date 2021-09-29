import React, { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      status: 'new',
      title: 'Eat',
    },
    {
      id: 2,
      status: 'completed',
      title: 'Sleep',
    },
    {
      id: 3,
      status: 'new',
      title: 'Code',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  const handelTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handelShowAllClick = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: 'all' }),
    });
  };

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilteredStatus(params.status);
  }, [location.search]);

  const handelShowCompletedClick = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: 'completed' }),
    });
  };

  const handelShowNewClick = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: 'new' }),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [filteredStatus, todoList]);

  const handleTodoFormSumit = (value) => {
    console.log('Form sumit', value);
  };

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSumit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handelTodoClick} />

      <div>
        <button onClick={handelShowAllClick}>All CLick</button>
        <button onClick={handelShowCompletedClick}>Completed CLick</button>
        <button onClick={handelShowNewClick}>New CLick</button>
      </div>
    </div>
  );
}

export default ListPage;
