import React from 'react';

function App() {
  const link = process.env.REACT_APP_LINK;

  return (
    <div>
      <iframe
      title="App"
        height="170px"
        width="300px"
        src={link}
        allowFullScreen
        scrolling='no'
      ></iframe>
    </div>
  );
}

export default App;