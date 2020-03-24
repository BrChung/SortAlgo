//Bubble Sort
export function getBubbleSortAnimations(array){
  const animations=[];
  if(array.length<=1)return array;
  const auxiliaryArray=array.slice();
  doBubbleSort(auxiliaryArray,animations);
  return animations;
}

function doBubbleSort(array, animations){
  let sorted;
  do{
    sorted=false;
    for(let i=0;i<array.length-1;i++){
      animations.push([i,i+1,true]);
      animations.push([i,i+1,true]);
      if(array[i]>array[i+1]){
       animations.push([i,array[i+1],false]);
       animations.push([i+1,array[i],false]);
       swap(array, i, i+1);
       sorted=true;
      }
    }
  }while(sorted);
}

//Swap function for swapping values
function swap(array, firstIndex, secondIndex){
  let tempValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempValue;
}