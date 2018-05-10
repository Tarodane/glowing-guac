function frustration1(){
    document.getElementById("bak").className = "hidden";
    document.getElementById("chr").className = "hidden";
    document.getElementById("spe").className = "hidden";
    
    document.getElementById("tec").className = "";
};
function frustration2(){
    document.getElementById("tec").className = "hidden";
    document.getElementById("bak").className = "hidden";
    document.getElementById("chr").className = "hidden";
    
    document.getElementById("spe").className = "";
};
function frustration3(){
    document.getElementById("tec").className = "hidden";
    document.getElementById("spe").className = "hidden";
    document.getElementById("bak").className = "hidden";
    
    document.getElementById("chr").className = "";
};
function frustration4(){
    document.getElementById("tec").className = "hidden";
    document.getElementById("spe").className = "hidden";
    document.getElementById("chr").className = "hidden";
    
    document.getElementById("bak").className = "";
};


var i = 1;

function hoBoi(){
    
    if(i == 0){document.getElementById("snapgram").src="Images/IMG_3753.JPG"; i = 1; document.getElementById("uno").className = "indent"; document.getElementById("dos").className = "hidden  indent"; document.getElementById("tres").className = "hidden"}    
    else if(i == 1){document.getElementById("snapgram").src="Images/IMG_3941.PNG"; i = 2; document.getElementById("uno").className = "hidden indent"; document.getElementById("dos").className = "indent"; document.getElementById("tres").className = "hidden indent"}
    else if(i == 2){document.getElementById("snapgram").src="Images/IMG_4102.PNG"; i = 0; document.getElementById("uno").className = "hidden indent"; document.getElementById("dos").className = "hidden indent"; document.getElementById("tres").className = "indent"}
    
};

function hoGril(){
    
    
}