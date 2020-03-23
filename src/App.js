import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './App.css';

function App() {
  const useDesktop = useMediaQuery('(min-width:600px)')
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
