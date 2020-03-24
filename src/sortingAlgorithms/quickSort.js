//Quick Sort
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  doQuickSort(auxiliaryArray, 0, array.length - 1, animations);
  return animations;
}

function doQuickSort(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx){
    return;
  }
  const pivotIdx = partitionArray(array, startIdx, endIdx, animations);
  doQuickSort(array, startIdx, pivotIdx-1, animations);
  doQuickSort(array, pivotIdx+1, endIdx, animations);
}

function partitionArray(array, startIdx, endIdx, animations){
  // pivot (Element to be placed at right position) also the last element
  let pivotValue = array[endIdx];
  let pivotIdx = startIdx; // Index of smaller element
  for (let i=startIdx; i<endIdx; i++){
    // If current element is smaller than the pivot
    if (array[i] < pivotValue){
      animations.push([i, pivotIdx, true]);
      animations.push([i, pivotIdx, true]);
      animations.push([i, array[pivotIdx], false]);
      animations.push([pivotIdx, array[i], false]);
      swap(array, i, pivotIdx);
      pivotIdx++; // increment index of smaller element
    }
  }
  animations.push([pivotIdx, endIdx, true]);
  animations.push([pivotIdx, endIdx, true]);
  animations.push([pivotIdx, array[endIdx], false]);
  animations.push([endIdx, array[pivotIdx], false]);
  swap(array, pivotIdx, endIdx);
  return(pivotIdx);
}

//Swap function for swapping values
function swap(array, firstIndex, secondIndex){
  let tempValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempValue;
}