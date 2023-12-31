


var targetDate = new Date('Jan 1, 2024 00:00:00').getTime();

if(targetDate <= 0){
    console.log("new year 2024");
    console.log("Stop CountDown");
}else if( targetDate >= 0){
    console.log("New Year is cooming Soon");
    console.log("show CoundDown")
}else{
    console.log("Set the Target Date");
}