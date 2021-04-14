import React from 'react';
import MyContext from './MyContext';
import MyOtherComponent from './MyOtherComponent';

function MyComponent() {
  return (
    // Se tiver esse parâmetro, passará o valor
    // Senão, passará o valor definito no default do MyContext
    <MyContext.Provider value={123}>
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;