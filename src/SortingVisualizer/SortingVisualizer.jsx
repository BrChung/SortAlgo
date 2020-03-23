import React from 'react';
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



//Icons
import SortIcon from '@material-ui/icons/Sort';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MoreIcon from '@material-ui/icons/MoreVert';



import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort';
import {getHeapSortAnimations} from '../sortingAlgorithms/heapSort';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {getSelectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import './SortingVisualizer.css';

// This is the main color of the array bars.
const BAR_DEFAULT_COLOR = 'lightblue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


function valuetext(value) {
  return `${value}`;
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      arraySize: 100,
      sortingSpeed: 1,
      arraySorted: false,
      arraySorting: false,
      anchorEl: null,
      drawerOpen: false,
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  sortButtonEvent(){
    this.setState({ arraySorted: true, arraySorting: true, drawerOpen: false });
  }

  resetArray() {
    const array = [];
    const arraySize = this.state.arraySize;
    for (let i = 0; i < arraySize; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    const speed = (-4 / 150) * (arraySize-50) + 5;
    this.setState({ array });
    this.setState({ arraySorted: false, sortingSpeed: speed, selectedIndex: 0 });
  }

  reverseArray() {
    const array = [];
    const arraySize = this.state.arraySize;
    let pushValue = 495;
    const step = pushValue / arraySize;
    for (let i = 0; i < arraySize; i++) {
      array.push(Math.floor(pushValue + 5));
      pushValue = pushValue - step;
    }
    const speed = (-4 / 150) * (arraySize-50) + 5
    this.setState({ array });
    this.setState({ arraySorted: false, sortingSpeed: speed, selectedIndex: 1 });
  }

  mergeSort() {
    this.sortButtonEvent();
    const auxiliaryArray = this.state.array.slice();
    const animations = getMergeSortAnimations(auxiliaryArray);
    for (let i = 0, len = animations.length; i < len; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : BAR_DEFAULT_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.sortingSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if(i + 1 === len){
            this.setState({ arraySorting: false });
          }
        }, i * this.state.sortingSpeed);
      }
    }
  }

  quickSort() {
    this.sortButtonEvent();
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0, len = animations.length; i < len; i++) {
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange=animations[i][2];
      if(isColorChange){
        const[barOneIdx,barTwoIdx]= animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color=i%2===0?SECONDARY_COLOR:BAR_DEFAULT_COLOR;
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*this.state.sortingSpeed);
       }else{
        setTimeout(()=>{
          const [barOneIdx,newHeight]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          barOneStyle.height=`${newHeight}px`;
          if(i + 1 === len){
            this.setState({ arraySorting: false });
          }
        },i*this.state.sortingSpeed);
      }
    }
  }

  heapSort() {
    this.sortButtonEvent();
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0, len = animations.length; i < len; i++) {
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange=animations[i][2];
      if(isColorChange){
        const[barOneIdx,barTwoIdx]= animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color=i%2===0?SECONDARY_COLOR:BAR_DEFAULT_COLOR;
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*this.state.sortingSpeed);
       }else{
        setTimeout(()=>{
          const [barOneIdx,newHeight]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          barOneStyle.height=`${newHeight}px`;
          if(i + 1 === len){
            this.setState({ arraySorting: false });
          }
        },i*this.state.sortingSpeed);
      }
    }
  }

  bubbleSort() {
    this.sortButtonEvent();
    const animations=getBubbleSortAnimations(this.state.array);
    for (let i = 0, len = animations.length; i < len; i++) {
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange=animations[i][2];
      if(isColorChange){
        const[barOneIdx,barTwoIdx]= animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color=i%2===0?SECONDARY_COLOR:BAR_DEFAULT_COLOR;
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
          if(i + 1 === len){
            this.setState({ arraySorting: false });
          }
        },i*this.state.sortingSpeed);
       }else{
        setTimeout(()=>{
          const [barOneIdx,newHeight]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          barOneStyle.height=`${newHeight}px`;
        },i*this.state.sortingSpeed);
      }
    }
  }

  selectionSort() {
    this.sortButtonEvent();
    const animations=getSelectionSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++){
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange=animations[i][2];
      if(isColorChange){
        const[barOneIdx,barTwoIdx]= animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color=i%2===0?SECONDARY_COLOR:BAR_DEFAULT_COLOR;
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*this.state.sortingSpeed);
       }else{
        setTimeout(()=>{
          const [barOneIdx,newHeight]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          barOneStyle.height=`${newHeight}px`;
        },i*this.state.sortingSpeed);
      }
    }
  }

  insertionSort() {
    this.sortButtonEvent();
    const animations=getInsertionSortAnimations(this.state.array);
    for (let i = 0, len = animations.length; i < len; i++) {
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange=animations[i][2];
      if(isColorChange){
        const[barOneIdx,barTwoIdx]= animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color=i%2===0?SECONDARY_COLOR:BAR_DEFAULT_COLOR;
        setTimeout(()=>{
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;
        },i*this.state.sortingSpeed);
       }else{
        setTimeout(()=>{
          const [barOneIdx,newHeight]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          barOneStyle.height=`${newHeight}px`;
          if(i + 1 === len){
            this.setState({ arraySorting: false });
          }
        },i*this.state.sortingSpeed);
      }
    }
  }

  updateArrayValue = (event, newValue) => {
    if(newValue !== this.state.arraySize){
      this.setState({ arraySize: newValue });
      if(this.state.selectedIndex === 0){
        this.resetArray();
      }
      else{
        this.reverseArray();
      }
    }
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    if(index === 0){
      this.resetArray();
    }
    else{
      this.reverseArray();
    }
  };

  handleClickListItem = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event, input) => {
    this.setState({ anchorEl: input });
  };

  

  toggleDrawer(newValue){
    this.setState( { drawerOpen: newValue } );
  };


  render() {
    const {array} = this.state;
    const disabled_sorted = this.state.arraySorted;
    const disabled_sorting = this.state.arraySorting;
    const drawerOpen = this.state.drawerOpen;
    const anchorEl = this.state.anchorEl;
    const selectedIndex = this.state.selectedIndex;
    const options = [
      'Random',
      'Reverse',
    ];
    

    return (
      <div className="container">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" className="sortButton" color="inherit" aria-label="sort" onClick={() => {this.toggleDrawer(true)}} disabled={disabled_sorting}>
              <SortIcon />
            </IconButton>
            <Typography variant="h6" className="grow">
              <Link href="https://sortalgo.com" color="inherit" underline="none">
                SortAlgo
              </Link>
            </Typography>
            <IconButton edge="end" className="moreButton" color="inherit" aria-label="more" onClick={() => {this.toggleDrawer(true)}} disabled={disabled_sorting}>
              <MoreIcon />
            </IconButton>
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
          <div className="array-type">
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
              size="large"
              startIcon={<SortIcon />}
            >
              Sort
            </Button>
          </div>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: BAR_DEFAULT_COLOR,
                height: `${value}px`,
              }}>
            </div>
          ))}
        </div>
        <div className="Info">
            <p>sdfsdfsdfsdfdsfsdf</p>
        </div>
          <Drawer anchor='left' open={drawerOpen} onClose={() => {this.toggleDrawer(false)}}>
            <div className="drawer-list">
              <List component="nav" aria-label="sort-algo-side-nav-bar"
                subheader={
                  <ListSubheader component="div" id="sort-algo-subheader">
                    Sorting Algorithms
                  </ListSubheader>
                }>
                <ListItem button onClick={() => this.mergeSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <MergeTypeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Merge Sort" />
                </ListItem>
                <ListItem button onClick={() => this.quickSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <CallSplitIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quick Sort" />
                </ListItem>
                <ListItem button onClick={() => this.heapSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <AccountTreeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Heap Sort" />
                </ListItem>
                <ListItem button onClick={() => this.selectionSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <SelectAllIcon />
                  </ListItemIcon>
                  <ListItemText primary="Selection Sort" />
                </ListItem>
                <ListItem button onClick={() => this.insertionSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <ViewCarouselIcon />
                  </ListItemIcon>
                  <ListItemText primary="Insertion Sort" />
                </ListItem>
                <ListItem button onClick={() => this.bubbleSort()} disabled={disabled_sorted}>
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
                <ListItem button onClick={() => this.resetArray()} disabled={disabled_sorted}>
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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

