import React, { useEffect } from 'react';
import SVQRouter from './SVQRouter';
import Providers from './Providers';
import { ping } from './util/services/ServiceMethods';
import { ApiResponse } from 'openapi-typescript-fetch';

function App() {

  useEffect(() => {
    const pingFunction = ping();
    pingFunction({}).then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (
    <Providers>
      <SVQRouter />
    </Providers>
  );
}

export default App;
