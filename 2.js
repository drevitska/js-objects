
//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие 
//функции для работы с этим объектом: 

//Функция сложения 2-х объектов-дробей;

//Функция вычитания 2-х объектов-дробей;

//ункция умножения 2-х объектов-дробей;

//Функция деления 2-х объектов-дробей;

//Функция сокращения объекта-дроби.

let fractions = {
  fraction_1: {
    numerator: 6,
    denominator: 12,
  },
  fraction_2: {
    numerator: 9,
    denominator: 15,
  },
  
  calcSum: function () {
    let numeratorSum = this.fraction_1.numerator * this.fraction_2.denominator + this.fraction_2.numerator * this.fraction_1.denominator;
    let denominatorSum = this.fraction_1.denominator * this.fraction_2.denominator;
    return {numeratorSum, denominatorSum};
  },

  calcMinus: function () {
    let numeratorMinus = this.fraction_1.numerator * this.fraction_2.denominator - this.fraction_2.numerator * this.fraction_1.denominator;
    let denominatorMinus = this.fraction_1.denominator * this.fraction_2.denominator;
    return {numeratorMinus, denominatorMinus};
  },

  calcMultiply: function () {
    let numeratorMultiply = this.fraction_1.numerator * this.fraction_2.numerator;
    let denominatorMultiply = this.fraction_1.denominator * this.fraction_2.denominator;
    return {numeratorMultiply, denominatorMultiply};
  },

  calcDivision: function () {
    let numeratorDivision = this.fraction_1.numerator * this.fraction_2.denominator;
    let denominatorDivision = this.fraction_1.denominator * this.fraction_2.numerator;
    return {numeratorDivision, denominatorDivision};
  },

  calcReduction: function () {
    let max = this.fraction_1.numerator, min = this.fraction_1.denominator;

    if (this.fraction_1.numerator < this.fraction_1.denominator) {
      min = this.fraction_1.numerator;
      max = this.fraction_1.denominator;
    }

    let res = max % min, del = min;

    while (res !== 0) {
      max = min,
      min = res,
      res = max % min;
      del = min;
    }

  let numeratorReduction = this.fraction_1.numerator / del;
  let denominatorReduction = this.fraction_1.denominator / del;
  return {numeratorReduction, denominatorReduction};
},
  
}

fractions.calcSum();
console.log('sum', fractions.calcSum());

fractions.calcMinus();
console.log('minus', fractions.calcMinus());

fractions.calcMultiply();
console.log('multiply', fractions.calcMultiply());

fractions.calcDivision();
console.log('Division', fractions.calcDivision());

fractions.calcReduction();
console.log('Reductiony', fractions.calcReduction());


