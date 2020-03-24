//Heap Sort
var array_length;
var animations = [];

export function getHeapSortAnimations(array){
  if(array.length<=1)return array;
  animations = []
  const auxiliaryArray=array.slice();
  doHeapSort(auxiliaryArray);
  return animations;
}

function doHeapSort(array){
  array_length = array.length;
  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
    heap_root(array, i);
    }
  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    array_length--;
    heap_root(array, 0);
  }
}

function heap_root(array, index){
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let max = index;
  if (left < array_length && array[left] > array[max]){
    animations.push([max, left, true]);
    animations.push([max, left, true]);
    max = left;
  }
  if (right < array_length && array[right] > array[max]){
    animations.push([max, right, true]);
    animations.push([max, right, true]);
    max = right;
  }
  if (max !== index){
    swap(array, index, max);
    heap_root(array, max);
  }
}

//Swap function for swapping values
function swap(array, firstIndex, secondIndex){
  animations.push([firstIndex, secondIndex, true]);
  animations.push([firstIndex, secondIndex, true]);
  animations.push([firstIndex, array[secondIndex], false]);
  animations.push([secondIndex, array[firstIndex], false]);
  let tempValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempValue;
}