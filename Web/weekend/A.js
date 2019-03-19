console.log('input a timeframe in seconds');

var minuteAlarm = function (timeFrame){
    let milliSecondTimeFrame = timeFrame*1000;
    if (milliSecondTimeFrame.length > 1000 || milliSecondTimeFrame.length < 60000 || !isNaN(milliSecondTimeFrame)){
               setTimeout(function(){
           console.log('timer started');
       }, milliSecondTimeFrame);

       function alarmInput(){
           let d = new Date();
           let n = d.toLocaleTimeString();
           console.log(`Alarm ringing at ${Date()}`);
       }
    } else {
        console.log('input a real number')
    }         
    setInterval(alarmInput, milliSecondTimeFrame)

   }

clearInterval(minuteAlarm);