class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    let id = setInterval(()=>{
      this.currentTime++;
      console.log(this.currentTime, "CURRENT TIME")
      callback();
    },1000);
    this.intervalId = id;
  }

  getMinutes() {
    let minutes = "00"; 
    if(this.currentTime>59){
      let realMinutes = (this.currentTime/60).toFixed(0);
      if(realMinutes.length<2){
        realMinutes = this.computeTwoDigitNumber(realMinutes)
      } 
      minutes = realMinutes.toString();
    }
    console.log("MINUTES", typeof minutes, minutes)
    return minutes;
  }

  getSeconds() {
    let seconds = "00";
    if(this.currentTime){
      let secondsNum = this.currentTime%60;
      console.log("secondsNUm", secondsNum);
      seconds = secondsNum.toString();
      console.log("seconds", seconds);
    }
    if(seconds.length<2){
      seconds = this.computeTwoDigitNumber(seconds)
    } 
    return seconds;
    }

  computeTwoDigitNumber(value) {
    let result = "0";
    if(value){
      if(value<10){
        result += value;
      }else{
        result = value;
      }
      result = result.toString();
      console.log("result", typeof result, result)
      return result;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let timestamp = "00:00";
    if(this.currentTime){
      let minutes = this.getMinutes();
      let seconds = this.getSeconds();
      if(minutes<10){
        minutes = this.computeTwoDigitNumber(minutes);
      }
      if(seconds<10){
        seconds = this.computeTwoDigitNumber(seconds);
      }
    timestamp = `${minutes}+${seconds}`;
    }
    return timestamp;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}