 //requiere un modulo mas arriba va al package json y coge "main donde exporta los modulos ej: exports.sum = sum;"

const expect      = require('chai').expect
const suma        = require('..').sum
const resta       = require('..').res
const multi       = require('..').mult
const div         = require('..').div

describe('#torrarithmetic.js', function(){

  it('Vamos a sumar dos numeros', function(){
    const sumar = suma(10,5);
    expect(sumar).to.equal(15);
  });
  it('Vamos a restar dos numeros', function(){
    const restar = resta(10,5);
    expect(restar).to.equal(5);
  });
  it('Vamos a multiplicar dos numeros', function(){
    const multiplicar = multi(10,5);
    expect(multiplicar).to.equal(50);
  });
  it('Vamos a dividir dos numeros', function(){
    const dividir = div(10,5);
    expect(dividir).to.equal(2);
  });
})
