import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';


function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={Landing} />
      <Route path='/study' component={TeachersList} />
      <Route path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  )
}

export default Routes;