var scrollIndex; 
var startBackground; 
function start(){
    var myDiv = document.getElementById("nav")
    
    startBackground = window.getComputedStyle ? window.getComputedStyle(myDiv, null).getPropertyValue("background-color") : myDiv.style.backgroundColor;
//    alert(startBackground)
    
    let navList = document.getElementsByClassName("navA");
    
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

window.addEventListener("load", start, false); 
window.addEventListener("scroll", function(){
    let nav = document.getElementById("nav"); 
    let active = document.getElementsByClassName("active")[0]; 
    let navList = document.getElementsByClassName("navA"); 
    let shopCart = document.getElementsByClassName("shopingCart")[0]; 
    let logo = document.getElementsByClassName("logo")[0]; 
    
//    alert(active)
    
    if(window.scrollY === 0){
        nav.style.background = startBackground;
        if(active != null)
            active.style.color = "white"; 
        for(var i = 0; i < navList.length; i++){
            navList[i].style.color = "white"; 
        }
        shopCart.style.color = "white"; 
        logo.src = "../html/nt_white.png"
        nav.style.boxShadow = "none"
    }else{
        if(active != null)
            active.style.color = "blue";
        
        nav.style.background = "white"; 
        for(var i = 0; i < navList.length; i++){
            navList[i].style.color = "black"; 
        }
        shopCart.style.color = "black"; 
        logo.src = "../html/nt-black.png"
        nav.style.boxShadow = "0px 2px 1px 0px rgba(0, 0, 0, 0.2)"
    }

}, false); 

var backLeft = 0; 
window.addEventListener("scroll", function() {
//    var third = document.getElementById("thirdBack"); 
//    var section = document.getElementById("thirdSection"); 
    var scrolled = window.pageYOffset; 
//    var thirdScrolled = section.offsetTop; 
//    var startScroll = section.offsetTop - window.innerHeight; 
//
//    if(scrolled >= startScroll && scrolled <= (thirdScrolled + third.offsetHeight)){
//        if(scrollIndex < scrolled)    
//            backLeft += 0.5; 
//        else{
//            backLeft -= 0.5
//        }
//        third.style.backgroundPositionX = backLeft + "px"; 
//    }
//    
    
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
