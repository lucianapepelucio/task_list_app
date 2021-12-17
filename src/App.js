import React from 'react';
import Paperbase from './template/Paperbase';
import NewTask from './pages/NewTask';

const Tasklist = () => {
  return(
    <Paperbase>
      <NewTask />
    </Paperbase>
  )
}

export default Tasklist;