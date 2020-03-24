import React from 'react';

import {getMergeSortAnimations} from '../../sortingAlgorithms/mergeSort';
import {getQuickSortAnimations} from '../../sortingAlgorithms/quickSort';
import {getHeapSortAnimations} from '../../sortingAlgorithms/heapSort';
import {getBubbleSortAnimations} from '../../sortingAlgorithms/bubbleSort';
import {getSelectionSortAnimations} from '../../sortingAlgorithms/selectionSort';
import {getInsertionSortAnimations} from '../../sortingAlgorithms/insertionSort';

import './ArrayBars.css';


// This is the main color of the array bars.
const BAR_DEFAULT_COLOR = '#043565';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = '#A69CAC';

export default class ArrayBars extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
  
    }

    componentDidMount() {
        this.randomArray();
    }

    randomArray() {
        const array = [];
        const arraySize = this.props.arraySize;
        for (let i = 0; i < arraySize; i++) {
            array.push(randomInt(5, 500));
        }
        this.setState({ array });
    }

    reverseArray() {
        let array = [];
        this.setState({ array });
        const arraySize = this.props.arraySize;
        array = reversePushValues(5, 495, arraySize);
        this.setState({ array });
    }

    mergeSort() {
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
            }, i * this.props.sortingSpeed);
            } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                if(i + 1 === len){
                    this.props.arraySortingAction();
                }
            }, i * this.props.sortingSpeed);
            }
        }
    }

    quickSort() {
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
            },i*this.props.sortingSpeed);
            }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
                if(i + 1 === len){
                    this.props.arraySortingAction();
                }
            },i*this.props.sortingSpeed);
            }
        }
    }

    heapSort() {
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
            },i*this.props.sortingSpeed);
            }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
                if(i + 1 === len){
                    this.props.arraySortingAction();
                }
            },i*this.props.sortingSpeed);
            }
        }
    }

    bubbleSort() {
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
                    this.props.arraySortingAction();
                }
            },i*this.props.sortingSpeed);
            }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
            },i*this.props.sortingSpeed);
            }
        }
    }

    selectionSort() {
        const animations=getSelectionSortAnimations(this.state.array);
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
            },i*this.props.sortingSpeed);
            }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
                if(i + 1 === len){
                    this.props.arraySortingAction();
                }
            },i*this.props.sortingSpeed);
            }
        }
    }

    insertionSort() {
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
            },i*this.props.sortingSpeed);
            }else{
            setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
                if(i + 1 === len){
                    this.props.arraySortingAction();
                }
            },i*this.props.sortingSpeed);
            }
        }
    }


    render(){
        const {array} = this.state;
        return(
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
        );
    }
}

//Returns a random integer from interval
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
//Returns an array with decreasing value
function reversePushValues(min, max, arraySize) {
    const array = [];
    let pushValue = max;
    const step = max / arraySize;
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(pushValue + min));
        pushValue = pushValue - step;
    }
    return array.slice();
}