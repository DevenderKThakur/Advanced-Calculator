//                    To create a calculator for every possible Math question (Arithmatic,logrithmic,trignometric,primeter & Area, Matrix Calculation)
// the function is creted for the arithmatic calculator 
function arithmaticCalculator(){
    let x = parseInt(prompt('enter the first element'));
    let y = parseInt(prompt('enter the second element'));
    let opt = parseFloat(prompt('enter the operation '));
    switch(opt){
      case 1:
        alert(x+y);
        break;
      case 2:
        alert(x-y);
        break;
      case 3:
        alert(x*y);
        break;
      case 4:
        alert(x/y);
        break;
      case 5:
        alert('Invalid operation');
    }
}
// the function is used to calculate the logrithmic calculator
function logrithmicCalculator(){
   
}
// the function is used to calculate the trignometeric calculator
function trignometricCalculator(){
  let opt = parseFloat(prompt('Enter the opertation you want to perform '));
  switch (opt) {
    case 1:
       break;
    default:
        break;
  }
}
// the function is used to calculte the perimter and area
function perimterArea(){
 let opt = parseFloat(prompt('enter the operation which needs to be perform '));
 switch(opt){
    case 1:
        // perimeter of the rectangle 
        let l = parseFloat(prompt('enter the length of the rectangle '));
        let b = parseFloat(prompt('enter the breadth of the rectangle '));
        alert(2*(l+b));
        break;
    case 2:
        // perimeter of the square 
        let a = parseFloat(prompt('enter the side of the square'));
        alert(4*a);
        break;
    case 3:
        // perimter of the circle 
        let r = parseFloat(prompt('enter the radius of the circle'));
         alert(2*3.14*r);
         break;
    case 4:
        // perimeter of the triangle 
        let side1 = parseFloat(prompt('enter the first side of the triangle'));
        let side2 = parseFloat(prompt('enter the sacond side of the triangle '));
        let side3 = parseFloat(prompt('enter the third side of the triangle '));
        alert(side1+side2+side3);
        break;  
    case 5:
        //Area of the rectangle 
        let length = parseFloat(prompt('Enter the length of the rectangle '));
        let breadth = parseFloat(prompt('Enter the breadth of the rectangle'));
        alert(length*breadth);
        break;
    case 6:
        //Area of the square
        let side = parseFloat(prompt('Enter the  side of the square '));
        alert(side*side) ;
        break;
    case 7:
            //Area of the circle
        let radius = parseFloat(prompt('Enter the radius of the circle'));
        alert(3.14*radius*radius);
        break;
    case 8:
        //Area of the triangle
        let base = parseFloat(prompt('Enter the base of the tringle '));
        let height = parseFloat(prompt('Enter the height of the triangle'));
        alert((base*height)/2);
        break;    
    default:
        alert('Invalid Operation ');

 } 
}
// the main function which allows the other fuction as per user choice to run 

let opt = parseFloat(prompt('Enter which calculator you want to use!'));
switch (opt) {
    case 1:
        arithmaticCalculator();
        break;
    case 2:
        logrithmicCalculator();
        break;
    case 3:
        trignometricCalculator();
        break;
    case 4:
        perimterArea();
        break;    
    default:
        alert('Enter the right operator ')
}
