//Selection Sort
export function getSelectionSortAnimations(array){
  const animations=[];
  if(array.length<=1)return array;
  const auxiliaryArray=array.slice();
  doSelectionSort(auxiliaryArray,animations);
  return animations;
}

function doSelectionSort(array, animations){
  let minIdx;
  let len = array.length;
  for(let i=0; i < len; i++){
    minIdx = i;
    for(let j = i+1; j < len; j++){
      if(array[j] < array[minIdx]){
        minIdx = j;
      }
      animations.push([i, j, true]);
      animations.push([i, j, true]);
    }
    animations.push([i, array[minIdx], false]);
    animations.push([minIdx, array[i], false]);
    swap(array, i, minIdx)
  }
  return array;
}

//Swap function for swapping values
function swap(array, firstIndex, secondIndex){
  let tempValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempValue;
}