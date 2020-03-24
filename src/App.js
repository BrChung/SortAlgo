import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './theme';


function App() {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <SortingVisualizer isDesktop={isDesktop}></SortingVisualizer>
      </ThemeProvider>
    </div>
  );
}

export default App;
