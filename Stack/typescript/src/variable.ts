export default function() {
  console.log('%c 1. primitive variable', 'background: lavender');
  // Boolean
  let free: boolean = true;
  free = false;
  // Number
  let score: number = 10;
  // String
  let elm: string = "ABC";
  elm = 'ABC 123';
  elm = `Free: ${free} - Score: ${score}`;
  console.log(free);
  console.log(score);
  console.log(elm);

  console.log('%c 2. array', 'background: lavender');
  let arrNumber: Array<number> = [1, 5, 8];
  let arrString: string[] = ["java", "android", "es6"];
  console.log(arrNumber);
  console.log(arrString);
  console.log(arrString.push("typescript"));    // 4
  console.log(arrString); // "java", "android", "es6", "typescript"

  console.log('%c 3. tuple', 'background: lavender');
  let x: [string, number, boolean];
  x = ["abc", 10, true];
  console.log(x);

  console.log('%c 4. enum', 'background: lavender');
  enum STATUS { created = 100, process = 900, finish = 500};
  let todoStatus : STATUS = STATUS.finish;
  console.log(todoStatus);

  console.log('%c 5. any', 'background: lavender');
  let mVariable: any = 4;
  mVariable = "ABC";
  mVariable = true;
  let mArray: any[] = [1, true, "abc"];
  console.log(mVariable);
  console.log(mArray);

  console.log('%c 6. type assertion', 'background: lavender');
  let mVariable6: any = [1,2,3];
  let total61	= <string>mVariable6;
  let total62	= mVariable6 as string;
  console.log(typeof mVariable6);
  console.log(typeof total61);
  console.log(typeof total62);

  console.log('%c 7. interface', 'background: lavender');
  interface CourseInterface {
    name: string;
    time: string;
    free?: boolean;
  }
  let objTwo: CourseInterface;
  objTwo = {
    name: "ES6",
    time: "5h"
  };
  let objThree: CourseInterface = {
    name: "Typescript",
    time: "10h",
    free: false
  };
  console.log(objTwo);
  console.log(objThree);

  console.log('%c 8. interface array', 'background: lavender');
  interface CourseList {
    [index: number]: string;
  }
  let course: CourseList = ["1", "2"];
  console.log(course[0]);

  interface JobList {
    name: string,
    [index: string]: string;
  }
  let job: JobList = { name: "it"};
  console.log(job.name); 
}