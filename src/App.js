import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './App.css';

function App() {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <div className="App">
      <SortingVisualizer isDesktop={isDesktop}></SortingVisualizer>
    </div>
  );
}

export default App;
