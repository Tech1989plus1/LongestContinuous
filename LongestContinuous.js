exports.longestContinuous = (arr) => { 
  if (!Array.isArray(arr)) {
    return 0;
  }
  
  var longest = (typeof arr[0] === 'number' ? 1 : 0);
  
  const recursive = (val, i, continuous, arr, length) => {
    if (i > length) {return continuous;}

    if (typeof arr[i] !== 'number') {return continuous;}

    if (val === arr[i]) {
      continuous = recursive(val, i+1, continuous+1, arr, arr.length);   
    }

    if (continuous > longest) {
        longest = continuous;
    }

    recursive(arr[i], i+1, 1, arr, arr.length);  
  }
    
  recursive(arr[0], 1, longest, arr, arr.length);
  
  return longest;
}
