
const instructors = [
    'Dani',
    'Meredith',
    'Alan',
    'Jess'
  ]
  
  // TODO: Transform this into an arrow function.
  const greet = (name) => {
    return `Hello, ${name}!`
  }
  
  /** 
   * Transforms each value in the list using the given function, then returns 
   * the new list.
   */
  function transform_list(lst, func) {
    new_list = []
    for (let i = 0; i < lst.length; i++) {
      const new_item = func(lst[i])
      new_list.push(new_item)
    }
    return new_list
  }
  
  
  list_of_greetings = transform_list(instructors, greet)
  
  console.log(list_of_greetings)