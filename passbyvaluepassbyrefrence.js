
// pass by value
function changeValue(x) {
    x = 10;
    console.log("Inside function: " + x); 
  }
  
  let a = 5;
  changeValue(a);
  console.log("Outside function: " + a); 
  
// pass by reference
  function modifyObject(obj) {
    obj.name = "John"; 
    obj.age = 30;
    console.log("Inside function:", obj);
  }
  
  let person = { name: "Alice" };
  console.log("Before function call:", person);
  
  modifyObject(person);
  console.log("After function call:", person);
  