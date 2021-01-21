class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1000)
  }

  getMinutes() {
    return (this.currentTime - this.currentTime % 60) / 60;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
      if (num.toString().length == 1) {
        return `0${num}`;
      }
      return num.toString();
    }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
   this.currentTime = 0; 
  }

  splitClick() {
    let minTwoDigit = this.twoDigitsNumber(this.getMinutes())
    let secondTwoDigit = this.twoDigitsNumber(this.getSeconds())
    return `${minTwoDigit}:${secondTwoDigit}`
  }
}


