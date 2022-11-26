import React, { useEffect } from 'react';
import SVQRouter from './SVQRouter';
import Providers from './Providers';
import { Configuration, TestControllerApi } from './services-gen';

function App() {

  useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_BASE_URL);
    new TestControllerApi(new Configuration({ basePath: process.env.REACT_APP_BACKEND_BASE_URL })).ping()
      .then(res => console.log(res.response)).catch(err => console.error(err));
  }, [])

  return (
    <Providers>
      <SVQRouter />
    </Providers>
  );
}

export default App;
