
//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//Функция для вывода на экран информации об автомобиле;

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

 let auto = {
  production: 'ZAZ',
  model: 'Tavria',
  year: 2015,
  averageSpeed: 60,

  getInfo: function () {
    return `производитель "${this.production}", модель "${this.model}", год выпуска ${this.year}, средняя скорость ${this.averageSpeed} км/ч.`;
  },

  calcTravelTime: function (length) {
    this.travelTime = length / this.averageSpeed;
    return +this.travelTime.toFixed(2);
  },

  calcTimeRelax: function (length) {
    this.timeRelax = Math.floor((length / this.averageSpeed) / 4);
    if ((length / this.averageSpeed) % 4 ===0) {
      this.timeRelax -= 1;
    }
    return this.timeRelax;
  },

  calcTime: function (length) {
    this.time = this.calcTravelTime(length) + this.calcTimeRelax(length);
    return this.time;
  },
 }
