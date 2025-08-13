let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");        // s4 id selector

// generates random no.
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
    s1.style.backgroundColor = "rgba(179, 247, 247, 1)"
})
s1.addEventListener("mouseleave",function(){
    let rand = Math.floor(Math.random()*100);
    s1.innerHTML = "<h1>1</h1>";
    s1.style.backgroundColor = "rgba(255, 255, 255, 1)"
})
// double click 
s1.addEventListener("dblclick",function(){
    s1.style.backgroundColor = "rgba(250, 127, 127, 1)"
})

// change rgb color on hover
let clr = "red";
s2.addEventListener("mouseenter",function(){
    if(clr == "red"){
    s2.style.backgroundColor = "red";
    s2.innerHTML= "<h1>Red</h1>";
    clr = "green";
}
else if(clr == "green"){
    s2.style.backgroundColor = "green";
    s2.innerHTML= "<h1>Green</h1>";
    clr = "blue";
}
else{
     s2.style.backgroundColor = "blue";
    s2.innerHTML= "<h1>Blue</h1>";
    clr = "red";
}
})

s2.addEventListener("mouseleave",function(){
    s2.innerHTML= "<h1>2</h1>";
    s2.style.backgroundColor = "white";
})

// rgb(a,b,c) where a,b,c lies b/w 0 to 255
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
})

// sq4 on click change color of sq123
s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},255,255)`;
    s2.style.backgroundColor = `rgb(255,${r2},255)`;
    s3.style.backgroundColor = `rgb(255,255,${r3})`;
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
    s4.style.backgroundColor = "white";
})

// for curser
let main = document.getElementById("main");
let crsr = document.getElementById("curser");
main.addEventListener("mousemove",function(dets){    // bcz curser moves in main 
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})