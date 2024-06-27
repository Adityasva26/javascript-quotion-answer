
// pass by value
// primitive value
// do not changes the value of the variable
function changeValue(x) {
    x = 10;
    console.log("Inside function: " + x); 
  }
  
  let a = 5;
  changeValue(a);
  console.log("Outside function: " + a); 
  
// pass by reference
// non- primitive value
// changes the value of the variable
  function modifyObject(obj) {
    obj.name = "John"; 
    obj.age = 30;
    console.log("Inside function:", obj);
  }
  
  let person = { name: "Alice" };
  console.log("Before function call:", person);
  
  modifyObject(person);
  console.log("After function call:", person);
  // 