exports.longestContinuous = (arr) => { 
  if (!Array.isArray(arr) || arr[0] === 'undefined' || Number(arr[0]) === NaN) {
    return 0;
  }

  var longest = 0;

  const recursive = (val, i, continuous, arr, length) => {
    if (i > length) {return 0;}

    if (Number(arr[i]) === NaN) {return 0;}

    if (val === arr[i]) {
        recursive(val, i+1, continuous+1, arr, arr.length);   
    }

    if (continuous > longest) {
        longest = continuous;
    }

    recursive(arr[i], i+1, 1, arr, arr.length);
    
  }
  
  recursive(arr[0], 1, 1, arr, arr.length);

  return longest;
}