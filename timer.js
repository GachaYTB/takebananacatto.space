var timespan = document.getElementById('bananacattedtime')
var currentTime = 0

setInterval(function(){
    currentTime += 0.004;
    timespan.innerText = parseFloat(currentTime).toFixed(3)
}, 1);