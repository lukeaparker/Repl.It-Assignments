
const instructors = [
    'Dani',
    'Meredith',
    'Alan',
    'Jess'
  ]
  
  // TODO: Transform this into an arrow function.
  function greet(name) {
    return `Hello, ${name}!`
  }
  
  /** 
   * Transforms each value in the list using the given function, then returns 
   * the new list.
   */
  function transform_list(lst, func) {
    new_list = []
    // TODO: Write a for loop that loops over each item in the list, and for 
    // each item, calls `func` on that item and appends the result to `new_list`.
    // HINT: You can use `lst.push(item)` to append a new item to the list.
  
    
    return new_list
  }
  
  
  list_of_greetings = transform_list(instructors, greet)
  
  console.log(list_of_greetings)