
// export function Operaciones(num1, num2){
// 	this.numero1 = num1;
// 	this.numero2 = num2;
// }
//  Operaciones.prototype.sum = function(){
// 	return this.numero1 + this.numero2;
// };
//  Operaciones.prototype.rest = function(){
// 	return this.numero1 - this.numero2;
// };
//  Operaciones.prototype.mult = function(){
// 	return this.numero1 * this.numero2;
// };
//  Operaciones.prototype.div = function(){
// 	if(this.numero2 === 0){
//   	return "Esta es una división por " + this.numero2;
//   }
//   return this.numero1 / this.numero2;
// };


export function sum(num1, num2){
	return num1 + num2;
}
export function res(num1, num2){
	return num1 - num2;
}
export function mult(num1, num2){
	return num1 * num2;
}
export function div(num1, num2){
	if(num2 === 0){
	  	return "Esta es una división por " + num2;
	  }
	  return num1 / num2;
}
