
//3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

//Функция вывода времени на экран;

//Функция изменения времени на переданное количество секунд;

//Функция изменения времени на переданное количество минут;

//Функция изменения времени на переданное количество часов. 

//Учтите, что в последних 3-х функциях, при изменении одной части времени, 
//может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
  hours: 15,
  minutes: 25,
  seconds: 35,

  getInfo: function () {
    return `« ${this.hours}:${this.minutes}:${this.seconds}»`;
  },

  changeBySecond: function (changeS) {
    this.seconds += changeS; 
    if (this.seconds > 59) {
      this.seconds -= 60;
      this.minutes += 1;
      if (this.minutes > 59) {
        this.minutes -= 60;
        this.hours += 1;
        if (this.hours > 23) {
          this.hours -= 24
        }
      } 
    }
    console.log(`« ${this.hours}:${this.minutes}:${this.seconds}»`)
  },

  changeByMinute: function (changeM) {
    this.minutes += changeM;
    if (this.minutes > 59) {
      this.minutes -= 60;
      this.hours += 1;
      if (this.hours > 23) {
        this.hours -= 24
      }
    }
    console.log(`« ${this.hours}:${this.minutes}:${this.seconds}»`)
  },

  changeByHoure: function (changeH) {
    this.hours += changeH;
    if (this.hours > 23) {
      this.hours -= 24
    }
    console.log(`« ${this.hours}:${this.minutes}:${this.seconds}»`)
  },
}