export default function() {
  console.log('%c 1. function', 'background: lavender');
  function userInfo3(name: string = "john", age?: number): string{
    if(age == null){
      return `My name is ${name}`;
    } else {
      return `My name is ${name}, ${age} years old`;	
    }
  }
  console.log(userInfo3("peter"));

  console.log('%c 2. dynamic param', 'background: lavender');
  function totalLength(x: (string | any[]), y: (string[] | string) ) : number{
    return x.length + y.length;
  }
  console.log(totalLength('abc', ['123']));

  console.log('%c 3. arrow function', 'background: lavender');
  let userInfo03: (name: string, age: number) => string =
    function(pname, page){
      return `My name is ${pname}, ${page} years old`;
    }
  console.log(userInfo03("dai", 30));
}