var timer = 0.00
while (true) {
    setTimeout(function(){
        timer = timer + 0.01
        document.getElementById('bananacattedforsecs').innerText = "You've been bananacatted for "+ timer +" seconds."
    },10)
}