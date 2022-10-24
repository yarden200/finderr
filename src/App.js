import React from 'react';
import { Routes, Route } from 'react-router-dom'

import routes from './routes'
import { AppHeader } from './cmps/AppHeader'


export class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <main>
          <Routes>
            {routes.map(route => <Route key={route.path} element={<route.component />} path={route.path} />)}
          </Routes>
        </main>


      </>
    );
  }
}

export default App;
