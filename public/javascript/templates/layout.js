
// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerE1);
    document.body.insertAdjacentHTML("beforeend", footerE1);

    // Inserting sidebars:
    const wrapperElement = document.querySelector(".my-wrapper"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
      wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }         
  // add your own javascript code here...
 
function ghostCursor(options) {
let hasWrapperEl = options && options.element;
let element = hasWrapperEl || document.body;
 
let width = window.innerWidth;
let height = window.innerHeight;
let cursor = { x: width / 2, y: width / 2 };
let particles = [];
let canvas, context;
 
let baseImage = new Image();
baseImage.src = "../images/cursor/cursor.png";
 
function init() {
canvas = document.createElement("canvas");
context = canvas.getContext("2d");
canvas.style.top = "0px";
canvas.style.left = "0px";
canvas.style.pointerEvents = "none";
 
if (hasWrapperEl) {
canvas.style.position = "absolute";
element.appendChild(canvas);
canvas.width = element.clientWidth;
canvas.height = element.clientHeight;
} else {
canvas.style.position = "fixed";
document.body.appendChild(canvas);
canvas.width = width;
canvas.height = height;
}
 
bindEvents();
loop();
}
 
function bindEvents() {
element.addEventListener("mousemove", onMouseMove);
element.addEventListener("touchmove", onTouchMove, { passive: true });
element.addEventListener("touchstart", onTouchMove, { passive: true });
window.addEventListener("resize", onWindowResize);
}
 
function onWindowResize(e) {
width = window.innerWidth;
height = window.innerHeight;
 
if (hasWrapperEl) {
canvas.width = element.clientWidth;
canvas.height = element.clientHeight;
} else {
canvas.width = width;
canvas.height = height;
}
}
 
function onTouchMove(e) {
if (e.touches.length > 0) {
for (let i = 0; i < e.touches.length; i++) {
addParticle(e.touches[i].clientX, e.touches[i].clientY, baseImage);
}
}
}
 
function onMouseMove(e) {
if (hasWrapperEl) {
const boundingRect = element.getBoundingClientRect();
cursor.x = e.clientX - boundingRect.left;
cursor.y = e.clientY - boundingRect.top;
} else {
cursor.x = e.clientX;
cursor.y = e.clientY;
}
 
addParticle(cursor.x, cursor.y, baseImage);
}
 
function addParticle(x, y, image) {
particles.push(new Particle(x, y, image));
}
 
function updateParticles() {
context.clearRect(0, 0, width, height);
 
particles.sort(function (a, b) {
return a.zIndex - b.zIndex;
});
 
for (let i = 0; i < particles.length; i++) {
particles[i].update(context);
}
 
for (let i = particles.length - 1; i >= 0; i--) {
if (particles[i].lifeSpan < 0) {
particles.splice(i, 1);
}
}
}
 
function loop() {
updateParticles();
requestAnimationFrame(loop);
}
 
function Particle(x, y, image) {
const lifeSpan = 40;
this.initialLifeSpan = lifeSpan;
this.lifeSpan = lifeSpan;
this.position = { x: x, y: y };
this.zIndex = 100;
 
this.image = image;
 
this.update = function (context) {
this.lifeSpan--;
const opacity = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
 
context.globalAlpha = opacity;
context.drawImage(this.image, this.position.x, this.position.y);
};
}
 
init();
}

 

new ghostCursor();


  
});


            
            
            

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "lichenthropic.neocities.org") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerE1 = `
<header>
	<div class="container" id="header">
		<a id="top"></a>
	
		<marquee class="updates" direction="left" scrollamount="5" behavior="infinate;">|  CLICK THE RED BUTTON  |  LAST UPDATED: SEPT 26 2026  |  TAKE A TOKE AND COZY UP  |  SITE UNDER CONSTRUCTION   |  CLICK THE RED BUTTON  |  ACAB  |  BLACK LIVES MATTER  |  FREE PALESTINE  |  QUEER RIGHTS NOW  |  CLICK THE RED BUTTON  |  BE GAY DO CRIME  |  COVID NEVER ENDED  |  TRANS RIGHTS ARE HUMAN RIGHTS   |  CLICK THE RED BUTTON  |  CANNABIS IS MEDICINE  |  FREE HEALTHCARE FOR ALL  |  PUNCH A NAZI  |  THE ONE PIECE IS REAL  |  CLICK THE RED BUTTON  | </marquee>
		<div>
    <div>
		<details class="draggable">
                    <summary>
                    <div>
                        <img id="access-fairy" src="../images/assets/navi.gif" title="accessability fairy" alt="accessability menu" width="100px">
                    </div>
                    <br/>
                    </summary>
                    <div class="accessability">
                    ACCESSABILITY
                    
                    <br/>
                    

                        <button class="toggle-gif">GIF</button>
                        <button class="filter" onclick="crtoff(), location.reload()">CRT OFF</button>
                        <button class="filter" onclick="crton(), location.reload()">CRT ON</button>
                        <button class="colortheme" onclick="darkmode(), location.reload()">DARK</button>
                        <button class="colortheme" onclick="lightmode(), location.reload()">LIGHT</button>
                    </div>
                    </div class="box">
      </details>
    </div>
          </div>          
	    <div id="header" style="height: 150px;">
		</div>
            <div id="headerArea">
            
                    <nav id="navbar" style="margin-bottom: 10px; margin-top: 10px;">
                        <ul>
                            <li><a href="/pages/homepage">HOME</a></li>
                            <li><a href="/pages/about">ABOUT</a></li>
                            <li><a href="/pages/gallery">GALLERY</a></li>
                            <li><a href="/pages/smokeroom">SMOKE ROOM</a></li>
                            <li><a href="/pages/links">CREDITS + LINKS</a></li>
                            <li><a href="/pages/blog">BLOG</a></li>
                            <li><a href="/pages/critters">CRITTERS</a></li>
                            <li><a href="/pages/collection">COLLECTIONS</a></li>
                        </ul>
                </nav>
            </div>
        </div>
          
    </div>

</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerE1 = `<footer>
	    |	Lichenthropic   |   Chronic Cryptid 2026    |   
		<a href="#top">Back to top</a>  |
</footer>
	`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = 
        `
            `;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = 
        `
`;