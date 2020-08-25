exports.longestContinuous = (arr) => { 
  // If input parameter isn't array will return 0
  if (!Array.isArray(arr)) {
    return 0;
  }
  
  // Checking first element in array if equal to a number.
  // If true longest is equal to 1. Starting begining longestContinuous
  var longest = (typeof arr[0] === 'number' ? 1 : 0);
  
  // Recursive function will help find the longest continuous value
  // parameters
  // 'val' = will be used to check if value is eqaul to nexts elements
  // 'i' = element value
  // 'continuous' = counter
  // 'arr' = array
  // 'length' = array lenght
  const recursive = (val, i, continuous, arr, length) => {
    // ith element is greather than length return continuous
    if (i > length) {return continuous;}

    // If value is eqaul to current array value
    if (val === arr[i]) {
      // Calling recursive function again and incrementing i and continuous
      // parameters
      continuous = recursive(val, i+1, continuous+1, arr, arr.length);   
    }

    if (continuous > longest) {
        longest = continuous;
    }

    // Calling recursive function again and reseting parameters
    recursive(arr[i], i+1, 1, arr, arr.length);  
  }
    
  recursive(arr[0], 1, longest, arr, arr.length);
  
  return longest;
}
