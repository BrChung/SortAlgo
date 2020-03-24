//Insertion Sort
export function getInsertionSortAnimations(array){
  const animations=[];
  if(array.length<=1)return array;
  const auxiliaryArray=array.slice();
  doInsertionSort(auxiliaryArray,animations);
  return animations;
}

function doInsertionSort(array, animations){
  var key, j;
  for(let i = 1; i<array.length; i++){
    key = array[i];
    j = i;
    while(j > 0 && array[j-1] > key){
      animations.push([j, i, true]);
      animations.push([j, i, true]);
      animations.push([j, array[j-1], false]);
      animations.push([j, array[j-1], false]);
      array[j] = array[j-1];
      j--;
   }
   animations.push([j, i, true]);
   animations.push([j, i, true]);
   animations.push([j, key, false]);
   animations.push([j, key, false]);
   array[j] = key;
  }
  return array;
}