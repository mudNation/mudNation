var glowInterval; 
var glowDivs = []; 
var infoCell = []; 
var opacity = 1; 
var x = 0; 
var y = 0; 
var activeGlow; 
var glowWidth = 90; 
function start(){
//    glowInterval = setInterval(glowFunction, 30); 
    
    glowDivs = document.getElementsByClassName("glow"); 
    infoCell = document.getElementsByClassName("infoCell"); 
//    alert(glowDivs.length)
    for(var i = 0; i < glowDivs.length; i++){
        
        startInterval(infoCell[i]);
    }
    
}

function startInterval(infoCell){
    var glow = infoCell.getElementsByClassName("glow")[0]; 
    var sIcon = infoCell.getElementsByClassName("sIcons")[0]; 
    infoCell.addEventListener("mouseenter", function(){
        
        sIcon.style.width = "85px"; 
        sIcon.style.height = "85px"; 
        if(activeGlow != null)
            activeGlow.style.display = "none"; 
        
        activeGlow = glow; 
        clearInterval(glowInterval); 
        x = 200; 
        y = 0; 
        
        activeGlow.style.width = "85px"; 
        activeGlow.style.height = "85px"; 
        activeGlow.style.display = "block"; 
        activeGlow.style.opacity = "0"; 
        activeGlow.style.left = 200 + "px"; 
        activeGlow.style.top = 0 + "px"; 
        glowWidth = 85; 
        opacity = 1; 
        glowInterval = setInterval(glowFunction, 100);    
    })

    infoCell.addEventListener("mouseleave", function(){
        activeGlow.style.display = "none"; 
        sIcon.style.width = "90px"; 
        sIcon.style.height = "90px"; 
    })
}

function glowFunction(){
    glowWidth += 5; 
//    let width = activeGlow.clientWidth + 5; 
    activeGlow.style.width = glowWidth + "px"; 
    activeGlow.style.height = glowWidth + "px"; 
    x += 2.5; 
    y -= 2.5; 
//    activeGlow.style.left = x + "px"; 
    activeGlow.style.top = y + "px"; 
    opacity -= 0.08; 
    activeGlow.style.opacity = opacity; 
    
    if(opacity <0){
        clearInterval(glowInterval); 
        activeGlow.style.opacity = "0"; 
        activeGlow.style.width = "85px"; 
        activeGlow.style.height = "85px"; 
        activeGlow.style.display = "none"; 
        
        activeGlow.style.left = 200 + "px"; 
        activeGlow.style.top = 0 + "px"; 
        glowWidth = 90; 
//        activeGlow.style.left 
        opacity = 0; 
//        alert("in here")
    }
}






window.addEventListener("load", start, false); 