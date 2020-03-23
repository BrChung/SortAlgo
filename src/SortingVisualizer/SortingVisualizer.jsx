import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import SortIcon from '@material-ui/icons/Sort';
import Slider from '@material-ui/core/Slider';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


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
    this.setState({ arraySorted: false });
    this.setState({ sortingSpeed: speed });
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
    this.setState({ arraySorted: false });
    this.setState({ sortingSpeed: speed })
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
      this.resetArray()
    }
  };

  toggleDrawer(newValue){
    this.setState( { drawerOpen: newValue } );
  };

  render() {
    const {array} = this.state;
    const disabled_sorted = this.state.arraySorted;
    const disabled_sorting = this.state.arraySorting;
    const drawerOpen = this.state.drawerOpen;

    return (
      <div className="container">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="grow">
              SortAlgo
            </Typography>
            <Button
              color="inherit"
              onClick={() => this.resetArray()}
              disabled={disabled_sorting}
              >Random Array
            </Button>
            <Button
              color="inherit"
              onClick={() => this.reverseArray()}
              disabled={disabled_sorting}
              >Reverse Array
          </Button>
          </Toolbar>
        </AppBar>
        <div className="button-container">
          <Button onClick={() => this.mergeSort()}
            disabled={disabled_sorted}
            >Merge Sort
            </Button>
          <Button onClick={() => this.quickSort()}
            disabled={disabled_sorted}
            >Quick Sort
            </Button>
          <Button onClick={() => this.heapSort()}
            disabled={disabled_sorted}
            >Heap Sort
            </Button>
          <Button onClick={() => this.selectionSort()}
            disabled={disabled_sorted}
            >Selection Sort
            </Button>
          <Button onClick={() => this.insertionSort()}
            disabled={disabled_sorted}
            >Insertion Sort
            </Button>
          <Button onClick={() => this.bubbleSort()}
            disabled={disabled_sorted}
            >Bubble Sort
            </Button>
          <Typography id="discrete-slider" gutterBottom>
            Size
          </Typography>
          <Slider
            value={this.state.arraySize}
            onChange={this.updateArrayValue}
            disabled={disabled_sorting}
            defaultValue={100}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={50}
            max={200}
          />
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
        <Button onClick={() => {this.toggleDrawer(true)}}>Test</Button>
          <Drawer anchor='left' open={drawerOpen} onClose={() => {this.toggleDrawer(false)}}>
            <div className="drawerList">
              <List component="nav" aria-label="side nav bar">
                <ListItem button onClick={() => this.mergeSort()} disabled={disabled_sorted}>
                  <ListItemIcon>
                    <SortIcon />
                  </ListItemIcon>
                  <ListItemText primary="Merge Sort" />
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

