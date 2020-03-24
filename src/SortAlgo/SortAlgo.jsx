import React from 'react';

//Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Slider from '@material-ui/core/Slider';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';

//Material UI Icons
import SortIcon from '@material-ui/icons/Sort';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import GitHubIcon from '@material-ui/icons/GitHub';

//Components
import Footer from './Components/Footer';
import ArrayBars from './Components/ArrayBars';
import './SortAlgo.css';

//Returns text as valuetext string
function valuetext(value) {
  return `${value}`;
}

export default class SortAlgo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arraySorted: false,   //True if array is sorted
      arraySorting: false,  //True if array is currently being sorted
      drawerOpen: false,    //True if side drawer is open
      anchorEl: null,       //Anchor element for menu to select array type
      selectedIndex: 0,     //Index of selected option (0 - Array Type: Random, 1 - Array Type: Reverse)
      arraySize: 100,       //Array size to be sorted
      sortingSpeed: 1,      //Array sorting animation speed, default = 1 millisecond
    };

    //Create a reference to ArrayBars
    this.arrayBars = React.createRef();

    //Bind the this context to the finished sorting handler function
    this.finishedSortingHandler = this.finishedSortingHandler.bind(this);

  }

  //Nothing to Mount here
  componentDidMount() {}

  //---- Functions that alter array state (Reference ArrayBars.jsx) -----//
  
  //Reset the array to random values
  resetArray = () => {
    this.arrayBars.current.randomArray();
    const arraySize = this.state.arraySize;
    const speed = (-4 / 150) * (arraySize-50) + 5;
    this.setState({ arraySorted: false, sortingSpeed: speed, selectedIndex: 0 });
  }

  //Set array with reverse values
  reverseArray = () => {
    this.arrayBars.current.reverseArray();
    const arraySize = this.state.arraySize;
    const speed = (-4 / 150) * (arraySize-50) + 5;
    this.setState({ arraySorted: false, sortingSpeed: speed, selectedIndex: 1 });
  }

  //Do merge sort
  doMergeSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.mergeSort();
  }

  //Do quick sort
  doQuickSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.quickSort();
  }

  //Do heap sort
  doHeapSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.heapSort();
  }

  //Do selection sort
  doSelectionSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.selectionSort();
  }

  //Do insertion sort
  doInsertionSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.insertionSort();
  }

  //Do bubble sort
  doBubbleSort = () =>{
    this.sortButtonEvent();
    this.arrayBars.current.bubbleSort();
  }

  //----- State Handlers -----//

  //A sorting algorithm was just ran, therefore we must change state (also close drawer so user can see sorting proccess)
  sortButtonEvent(){
    this.setState({ arraySorted: true, arraySorting: true, drawerOpen: false });
  }

  //Function is called whenever slider changes state (new array size is chosen by user)
  updateArrayValue = (event, newValue) => {
    //newValue may not be new, whenever slider change event is detected - only run if array size value is changed
    if(newValue !== this.state.arraySize){
      this.setState({ arraySize: newValue });
      //If selected option is random, run reset array; else, create new reverse array
      if(this.state.selectedIndex === 0){
        this.resetArray();
      }
      else{
        this.reverseArray();
      }
    }
  };

  //Changes state of array sorting to false; once sorting is complete, release lock
  finishedSortingHandler(){
    this.setState({ arraySorting : false })
  }

  //When menu item is clicked, either reset array or reverse array
  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    if(index === 0){
      this.resetArray();
    }
    else{
      this.reverseArray();
    }
  };

  //When list item is clicked, set anchor element to new target
  handleClickListItem = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  //Closing handler for menu to attach anchor to input
  handleClose = (event, input) => {
    this.setState({ anchorEl: input });
  };

  //Toggle side drawer open or close (accepts boolean)
  toggleDrawer(newValue){
    this.setState( { drawerOpen: newValue } );
  };

  //Get button size based on media query
  getButtonSize(isDesktop){
    if(isDesktop){
      return "large"
    }
    else{
      return "small"
    }
  }

  render() {
    //Ditto above, (lines 43:49)
    const disabled_sorted = this.state.arraySorted;
    const disabled_sorting = this.state.arraySorting;
    const drawerOpen = this.state.drawerOpen;
    const anchorEl = this.state.anchorEl;
    const selectedIndex = this.state.selectedIndex;
    //Options for array type
    const options = [
      'Random',
      'Reverse',
    ];
    

    return (
      <div className="root-container">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" className="sort-button" color="inherit" aria-label="sort" onClick={() => {this.toggleDrawer(true)}} disabled={disabled_sorting}>
              <SortIcon />
            </IconButton>
            <Typography variant="h6" className="top-navbar" color="inherit">
              <Link href="https://sortalgo.com" color="inherit" underline="none">
                SortAlgo
              </Link>
            </Typography>
            <Link href="https://github.com/brchung/SortAlgo" color="inherit">
              <IconButton edge="end" className="github-button" color="inherit" aria-label="github">
                  <GitHubIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <div className="prop-container">
          <div className="slider-container">
          <Typography id="array-size-slider" gutterBottom>
            Array Size
            </Typography>
            <Slider
              value={this.state.arraySize}
              onChange={this.updateArrayValue}
              disabled={disabled_sorting}
              defaultValue={100}
              getAriaValueText={valuetext}
              aria-labelledby="array-size-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={50}
              max={200}
            />
          </div>
          <div className="array-type-menu">
            <List component="nav" aria-label="array type">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="array-type-menu"
                aria-label="array type"
                onClick={event => {this.handleClickListItem(event)}}
                disabled={disabled_sorting}
              >
                <ListItemText primary="Array Type:" secondary={options[selectedIndex]} />
              </ListItem>
            </List>
            <Menu
              id="array-type-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={event => {this.handleClose(event, null)}}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  disabled={index === 1 && disabled_sorted}
                  onClick={event => this.handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="sort-button">
            <Button
              onClick={() => {this.toggleDrawer(true)}}
              disabled={disabled_sorting}
              variant="contained"
              color="primary"
              size={this.getButtonSize(this.props.isDesktop)}
              startIcon={<SortIcon />}
            >
              Sort
            </Button>
          </div>
        </div>
        <ArrayBars
          ref = {this.arrayBars}
          arraySize = {this.state.arraySize}
          sortingSpeed = {this.state.sortingSpeed}
          arraySortingAction = {this.finishedSortingHandler}
        />
        <Footer />
        <Drawer anchor='left' open={drawerOpen} onClose={() => {this.toggleDrawer(false)}}>
          <div className="drawer-list">
            <List component="nav" aria-label="sort-algo-side-nav-bar"
              subheader={
                <ListSubheader component="div" id="sort-algo-subheader">
                  Sorting Algorithms
                </ListSubheader>
              }>
              <ListItem button onClick={() => this.doMergeSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <MergeTypeIcon />
                </ListItemIcon>
                <ListItemText primary="Merge Sort" />
              </ListItem>
              <ListItem button onClick={() => this.doQuickSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <CallSplitIcon />
                </ListItemIcon>
                <ListItemText primary="Quick Sort" />
              </ListItem>
              <ListItem button onClick={() => this.doHeapSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Heap Sort" />
              </ListItem>
              <ListItem button onClick={() => this.doSelectionSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <SelectAllIcon />
                </ListItemIcon>
                <ListItemText primary="Selection Sort" />
              </ListItem>
              <ListItem button onClick={() => this.doInsertionSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <ViewCarouselIcon />
                </ListItemIcon>
                <ListItemText primary="Insertion Sort" />
              </ListItem>
              <ListItem button onClick={() => this.doBubbleSort()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <BubbleChartIcon />
                </ListItemIcon>
                <ListItemText primary="Bubble Sort" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="generate-array-side-nav-bar"
              subheader={
                <ListSubheader component="div" id="sort-algo-subheader">
                  Generate New Array
                </ListSubheader>
              }>
              <ListItem button onClick={() => this.resetArray()} disabled={disabled_sorting}>
                <ListItemIcon>
                  <AutorenewIcon />
                </ListItemIcon>
                <ListItemText primary="Random Array" />
              </ListItem>
              <ListItem button onClick={() => this.reverseArray()} disabled={disabled_sorted}>
                <ListItemIcon>
                  <CompareArrowsIcon />
                </ListItemIcon>
                <ListItemText primary="Reverse Array" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
