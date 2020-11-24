var activeBox; 
var nextBox; 
var prevBox; 
var boxIndex = 0; 
var left = 0; 
var nextLeft = 1200; 
//var prevLeft = 
var prevLeft = -1200; 
var move; 
var instantSlide; 
var maxBoxIndex = 2; 
var onPage = true; 
var hoverVal = []; 
var outHoverVal = []; 
var prevBoxIndex; 
var nextBoxIndex; 
var scrollIndex; 
function start(){
    activeBox = document.getElementsByClassName("box")[0]; 
    nextBox = document.getElementsByClassName("box")[1]; 
    prevBox = document.getElementsByClassName("box")[2]; 
    
    move = setInterval(moveSlide, 3500); 
    boxIndex = 0; 
    
    var boxes = document.getElementsByClassName("boxCont"); 
    for(var i = 0; i<boxes.length; i++){
        addHover(boxes[i], i); 
        addOut(boxes[i], i)
        
    }
    
    var right = document.getElementsByClassName("rightNav")[0]; 
    right.addEventListener("click", rightClick, false); 
    var left = document.getElementsByClassName("leftNav")[0]; 
    left.addEventListener("click", leftClick, false); 
    scrollIndex = window.pageYOffset
    
    let navList = document.getElementsByClassName("navA");
    for(var i=0; i < navList.length; i++){
        navList[i].addEventListener("mouseenter", function(){
//            alert("e don enter")
            this.style.color = "blue"; 
            
        }, false )
        
        navList[i].addEventListener("mouseleave", function(){
//            alert("e don enter")
            if(window.scrollY == 0)
                this.style.color = "white";
            else
                this.style.color = "black"
            
        }, false )
    }; 
}

function leftClick(){
    clearInterval(instantSlide)
    clearInterval(move); 
    
    prevBox.style.left = "-1200px"; 
    nextLeft = -1200; 
    instantSlide = setInterval(moveLeft, 30); 
}

function rightClick(){
    clearInterval(instantSlide)
    clearInterval(move); 
    nextBox.style.left = "1200px"; 
    instantSlide = setInterval(function(){
        moveInstant(true)
    }, 30); 
}

function addHover(box, index){
    box.addEventListener("mouseenter", function(){
        hover(index); 
    }, false); 
}

function addOut(box, index){
    box.addEventListener("mouseleave", function(){
        outHover(index); 
    }, false); 
}

function moveSlide(){
    instantSlide = setInterval(moveInstant, 30); 
}

function moveLeft(){
    left = left + 100; 
    prevLeft = prevLeft + 100; 
    
    activeBox.style.left = left + "px"; 
    prevBox.style.left = prevLeft + "px"; 

    if(left == 1200){
        left = 0; 
        prevLeft = -1200;
        nextLeft = 1200; 
        
        activeBox.style.left = 1200 + "px"; 
        activeBox = prevBox;
        nextBoxIndex = boxIndex; 
//        alert(nextBoxIndex)
        boxIndex -= 1;  
       
        if(boxIndex < 0){
            boxIndex = maxBoxIndex; 
        }
        
        prevBoxIndex = (boxIndex - 1); 
        if(prevBoxIndex < 0)
            prevBoxIndex = maxBoxIndex; 

        nextBox = document.getElementsByClassName("box")[nextBoxIndex]; 
        prevBox = document.getElementsByClassName("box")[prevBoxIndex]; 
        clearInterval(instantSlide); 
        
        move = setInterval(moveSlide, 3500);
    }
}

function moveInstant(restart = false){
    left = left - 100; 
    nextLeft = nextLeft - 100; 
    
    activeBox.style.left = left + "px"; 
    nextBox.style.left = nextLeft + "px"; 
    
    if(left == -1200){
        left = 0; 
        nextLeft = 1200; 
        
        activeBox.style.left = 1200 + "px"; 
        activeBox = nextBox; 
        prevBoxIndex = boxIndex; 
        boxIndex += 1; 
        
        if(boxIndex > maxBoxIndex){
            boxIndex = 0; 
        }
        
        nextBoxIndex = boxIndex + 1; 
        if(nextBoxIndex > maxBoxIndex){
            nextBoxIndex = 0; 
        }
       
        
        nextBox = document.getElementsByClassName("box")[nextBoxIndex]; 
        prevBox = document.getElementsByClassName("box")[prevBoxIndex]; 
        

        clearInterval(instantSlide); 
        
//        alert(prevBoxIndex + ":::" + boxIndex + ":::" + nextBoxIndex); 
        if(restart){
            move = setInterval(moveSlide, 3500);
        }
    }
}

function hover(index){
//    alert(this.id); 
    clearInterval(outHoverVal[index]); 
    var box = document.getElementsByClassName("boxCont")[index]; 
//    alert(index)
    var startOp = 0; 
    var endOp = 1.0; 
    var hoverBox = box.getElementsByClassName("boxHover")[0]; 
//    hoverBox.style.opacity = 0.0; 
    
    hoverVal[index] = setInterval(function(){
        var img = box.getElementsByClassName("boxImage")[0]; 
        var hoverBox = box.getElementsByClassName("boxHover")[0];
//        alert(hoverBox)
        
        endOp -= 0.1; 
        startOp = startOp + 0.1; 
        
//        img.style.opacity = endOp; 
        hoverBox.style.opacity = startOp; 
        
        if(startOp >= 1){
            clearInterval(hoverVal[index]); 
        }
        
    }, 30)
}

function outHover(index){
    clearInterval(hoverVal[index])
    var box = document.getElementsByClassName("boxCont")[index]; 
    var startOp = 0; 
    var endOp = 1.0; 
    var hoverBox = box.getElementsByClassName("boxHover")[0]; 
//    hoverBox.style.opacity = 1; 
    
    outHoverVal[index] = setInterval(function(){
        var img = box.getElementsByClassName("boxImage")[0]; 
        var hoverBox = box.getElementsByClassName("boxHover")[0]; 
//        alert(hoverBox)
        
        endOp -= 0.1; 
        startOp = startOp + 0.1; 
        
//        img.style.opacity = startOp; 
        hoverBox.style.opacity = endOp; 
//        alert(hoverBox.style.opacity); 
        
        if(startOp >= 1){
            clearInterval(outHoverVal[index]); 
        }
    }, 30)
}

window.addEventListener("scroll", function(){
    let nav = document.getElementById("nav"); 
    let active = document.getElementsByClassName("active")[0]; 
    let navList = document.getElementsByClassName("navA"); 
    let shopCart = document.getElementsByClassName("shopingCart")[0]; 
    let logo = document.getElementsByClassName("logo")[0]; 
    
    
    if(window.scrollY === 0){
        nav.style.background = "none"; 
        active.style.color = "white"; 
        for(var i = 0; i < navList.length; i++){
            navList[i].style.color = "white"; 
        }
        shopCart.style.color = "white"; 
        logo.src = "html/nt_white.png"
        nav.style.boxShadow = "none"
//        alert("in here"); 
    }else{
        active.style.color = "blue"; 
        nav.style.background = "white"; 
        for(var i = 0; i < navList.length; i++){
            navList[i].style.color = "black"; 
        }
        shopCart.style.color = "black"; 
        logo.src = "html/nt-black.png"
        nav.style.boxShadow = "0px 2px 1px 0px rgba(0, 0, 0, 0.2)"
    }

}, false); 

window.addEventListener("load", start, false); 

document.addEventListener("visibilitychange", function(){
//    alert("e don change oh"); 
    if(onPage){
        clearInterval(instantSlide); 
        clearInterval(move); 
        onPage = false; 
    }else{
        move = setInterval(moveSlide, 3500); 
        onPage = true; 
    }
    
});

var backLeft = 0; 
window.addEventListener("scroll", function() {
    var third = document.getElementById("thirdBack"); 
    var section = document.getElementById("thirdSection"); 
    var scrolled = window.pageYOffset; 
    var thirdScrolled = section.offsetTop; 
    var startScroll = section.offsetTop - window.innerHeight; 

    if(scrolled >= startScroll && scrolled <= (thirdScrolled + third.offsetHeight)){
        if(scrollIndex < scrolled)    
            backLeft += 0.5; 
        else{
            backLeft -= 0.5
        }
        third.style.backgroundPositionX = backLeft + "px"; 
    }
    
    
    var fifth = document.getElementById("fifthBackground"); 
    var fifthSection = document.getElementById("fifthSection"); 
    var fifthScrolled = fifthSection.offsetTop; 
    var fifthStart = fifthSection.offsetTop - window.innerHeight; 
    
    if(scrolled >= fifthStart && scrolled <= (fifthScrolled + fifth.offsetHeight)){
        if(scrollIndex < scrolled)    
            backLeft += 0.5; 
        else{
            backLeft -= 0.5
        }
        fifth.style.backgroundPositionX = backLeft + "px"; 
    }
    

    scrollIndex = window.pageYOffset
});






