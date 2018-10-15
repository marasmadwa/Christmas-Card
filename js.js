

var style = document.createElement('link');
style.rel = "stylesheet"
style.type = 'text/css';
style.href = "css/1.1_Welcome_slide_style.css";
document.getElementsByTagName('head')[0].appendChild(style);
var slideContainer = document.querySelector(".slide-container");
slideContainer.classList.add("slideContainer");

var slide = document.getElementById("main-window").children[0];
var container = document.createElement("DIV");
var textContainer = document.createElement("DIV");
var text = document.createElement("h1");
var cloud = document.createElement("DIV");
var cloudContainer = document.createElement("DIV");
var christmasTree = document.createElement("DIV");
var christmasTree2 = document.createElement("DIV");
var cloud1 = document.createElement("Div");
var cloud2 = document.createElement("Div");
var cloud3 = document.createElement("Div");
var cloud4 = document.createElement("Div");
var cloud5 = document.createElement("Div");
var cloud6 = document.createElement("Div");
var cloud7 = document.createElement("Div");
var cloud8 = document.createElement("Div");
var cloud9 = document.createElement("Div");
var cloudContainer2 = document.createElement("DIV");
var cloud10 = document.createElement("Div");
var cloud11 = document.createElement("Div");
var cloud12 = document.createElement("Div");
var cloud13 = document.createElement("Div");
var cloud14 = document.createElement("Div");
var cloud15 = document.createElement("Div");
var cloud16 = document.createElement("Div");
var cloud17 = document.createElement("Div");
var exitBtn = document.createElement("button");

exitBtn.classList.add("exitBtn");
exitBtn.innerHTML = "+"
christmasTree.classList.add("christmasTree");
christmasTree2.classList.add("christmasTreeTwo");
cloud.classList.add("cloud");
cloudContainer.classList.add("cloudContainer");
cloud1.classList.add("a");
cloud2.classList.add("b");
cloud3.classList.add("c");
cloud4.classList.add("d");
cloud5.classList.add("e");
cloud6.classList.add("f");
cloud7.classList.add("g");
cloud8.classList.add("h");
cloud9.classList.add("i");

cloudContainer2.classList.add("cloudContainerTwo");
cloud10.classList.add("j");
cloud11.classList.add("k");
cloud12.classList.add("l");
cloud13.classList.add("m");
cloud14.classList.add("n");
cloud15.classList.add("o");
cloud16.classList.add("p");
cloud17.classList.add("r");

container.classList.add("snowflakes");
text.classList.add("text");
textContainer.classList.add("textContainer");
text.innerHTML = "Merry Christmas <br> <br> ";

container.appendChild(exitBtn);
container.appendChild(textContainer);
container.appendChild(cloud);
container.appendChild(christmasTree);
container.appendChild(christmasTree2);
cloud.appendChild(cloudContainer);
cloud.appendChild(cloudContainer2);
textContainer.appendChild(text);
cloudContainer.appendChild(cloud1);
cloudContainer.appendChild(cloud2);
cloudContainer.appendChild(cloud3);
cloudContainer.appendChild(cloud4);
cloudContainer.appendChild(cloud5);
cloudContainer.appendChild(cloud6);
cloudContainer.appendChild(cloud7);
cloudContainer.appendChild(cloud8);
cloudContainer.appendChild(cloud9);


cloudContainer2.appendChild(cloud10);
cloudContainer2.appendChild(cloud11);
cloudContainer2.appendChild(cloud12);
cloudContainer2.appendChild(cloud13);
cloudContainer2.appendChild(cloud14);
cloudContainer2.appendChild(cloud15);
cloudContainer2.appendChild(cloud16);
cloudContainer2.appendChild(cloud17);

slide.insertBefore(container, slide.firstChild);




var snowflakes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]

for(var i = 0; i < snowflakes.length; i++){
	var p = document.createElement("p");
	p.index = snowflakes[i];
	container.appendChild(p);
}

document.querySelector(".exitBtn").addEventListener("click", function(){
    container.classList.add("hide");
	slideContainer.classList.add("show");
});

