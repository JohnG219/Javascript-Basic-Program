let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;



}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;



}
document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("doubleBtn").onclick = function(){
    count+=2;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("tripleBtn").onclick = function(){
    count+=3;
    document.getElementById("countLabel").innerHTML = count;
}

