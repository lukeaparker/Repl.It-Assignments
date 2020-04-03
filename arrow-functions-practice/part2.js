
const numbers = [ 1, 2, 3, 4, 5 ]

// TODO: Transform this into an arrow function.
function add(num1, num2) {
  return num1 + num2
}

// TODO: Transform this into an arrow function.
function multiply(num1, num2) {
  return num1 * num2
}

/** 
 * Combine all values in the list together using the specified function.
 */
function combine_list(lst, func) {
  result_val = lst[0]
  // TODO: Write a for loop that loops over each item in the list (excluding 
  // the first one - it's already accounted for).
  // For each item, re-assign `result_val` to be the result of calling `func`
  // with the parameters of `result_val` and the current list item.
  
  
  return result_val
}


sum = combine_list(numbers, add)
console.log(sum)