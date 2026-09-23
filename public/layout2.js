// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);

    // Inserting sidebars:
    const wrapperElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
      wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
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
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
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
const headerEl = `
<header>
<div class="container" id="header">
    <a id="top"></a>

    <marquee class="updates" direction="left" scrollamount="5" behavior="infinate;">|  CLICK THE RED BUTTON  |  LAST UPDATED: SEPT 14 2026  |  TAKE A TOKE AND COZY UP  |  SITE UNDER CONSTRUCTION   |  CLICK THE RED BUTTON  |  ACAB  |  BLACK LIVES MATTER  |  FREE PALESTINE  |  QUEER RIGHTS NOW  |  CLICK THE RED BUTTON  |  BE GAY DO CRIME  |  COVID NEVER ENDED  |  TRANS RIGHTS ARE HUMAN RIGHTS   |  CLICK THE RED BUTTON  |  CANNABIS IS MEDICINE  |  FREE HEALTHCARE FOR ALL  |  PUNCH A NAZI  |  THE ONE PIECE IS REAL  |  CLICK THE RED BUTTON  | </marquee>
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
                        <li><a href="/pages/Homepage">HOME</a></li>
                        <li><a href="/pages/About">ABOUT</a></li>
                        <li><a href="/pages/gallery">GALLERY</a></li>
                        <li><a href="/pages/Smokeroom">SMOKE ROOM</a></li>
                        <li><a href="/pages/Links">CREDITS + LINKS</a></li>
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
const footerEl = `
<footer>
|	Lichenthropic   |   Chronic Cryptid 2026    |   
<a href="#top">Back to top</a>  |
</footer>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = `
<aside id="leftsidebar" style="margin-right: 0.25rem;">

<button class="toggle-gif">GIFS</button>

 <h2 style="text-align:center;" id="status">   Status:<br/>
<a href="https://www.imood.com/users/lichenthropic" target="_blank">
<img class="click" src="https://moods.imood.com/display/uname-lichenthropic/imood.gif" alt="The current mood of lichenthropic at www.imood.com" width="88px;"> 
</a></h2>
<div class="box"> 

<a class="click" href="https://lichenthropic.neocities.org/popout-page/feeds.html" onClick="return popup(this, 'rss')">
<p style="text-align:center;"><img class="click" src="https://lichenthropic.neocities.org/images/buttons/rss.png" alt="RSS Feed logo"></p>
</a>
<!-- start sw-rss-feed code --> 
<script type="text/javascript"> 
rssfeed_url = new Array(); 
rssfeed_url[0]="https://status.cafe/users/lichenthropic.atom"; rssfeed_url[1]="https://lichenthropic.neocities.org/rss.xml"; rssfeed_url[2]="https://lichenthropic-cryptid.tumblr.com/tagged/feed/rss"; rssfeed_url[3]="https://bsky.app/profile/did:plc:pcqej6eh2hqyw3djebatqw4c/rss";  
rssfeed_frame_width="100%"; 
rssfeed_frame_height="350"; 
rssfeed_scroll="on"; 
rssfeed_scroll_step="2"; 
rssfeed_scroll_bar="off"; 
rssfeed_target="_blank"; 
rssfeed_font_size="14"; 
rssfeed_font_face="Courier New"; 
rssfeed_border="off"; 
rssfeed_css_url=""; 
rssfeed_title="on"; 
rssfeed_title_name="FEED"; 
rssfeed_title_bgcolor="#000"; 
rssfeed_title_color="#fff"; 
rssfeed_title_bgimage=""; 
rssfeed_footer="off"; 
rssfeed_footer_name="rss feed"; 
rssfeed_footer_bgcolor="#fff"; 
rssfeed_footer_color="#333"; 
rssfeed_footer_bgimage=""; 
rssfeed_item_title_length="0"; 
rssfeed_item_title_color="#fff"; 
rssfeed_item_bgcolor="#000"; 
rssfeed_item_bgimage="https://lichenthropic.neocities.org/images/bg-images/redmarb.gif"; 
rssfeed_item_border_bottom="on"; 
rssfeed_item_source_icon="on"; 
rssfeed_item_date="on"; 
rssfeed_item_description="on"; 
rssfeed_item_description_length="300"; 
rssfeed_item_description_color="#fff"; 
rssfeed_item_description_link_color="#ff0000"; 
rssfeed_item_description_tag="off"; 
rssfeed_no_items="20"; 
rssfeed_cache = "86db238dcd562b16e9a90a1475d242ee"; 
</script> 
<script type="text/javascript" src="//feed.surfing-waves.com/js/rss-feed.js"></script> 
<!-- The link below helps keep this service FREE, and helps other people find the SW widget. Please be cool and keep it! Thanks. --> 
<div style="color:#000;font-size:10px; text-align:right; width:230px;">powered by <a class="click" href="https://surfing-waves.com" rel="noopener" target="_blank" style="color:#000;">Surfing Waves</a></div> 
<!-- end sw-rss-feed code -->
</div>
<br/>

<a class="click" href="https://lichenthropic.neocities.org/popout-page/chatbox.html" onClick="return popup(this, 'chatbox')">
<button class="chatbox-bg" style="text-align:center">
<img class="freeze" id="chatbox" src="https://lichenthropic.neocities.org/images/buttons/chat-now-lichenthropic.gif" alt="chat now button">
</button>
</a>

<div class="box">
<h3 style="text-align:center;">Smoking:</h3>

<h4 style="text-align:center;"><a class="click" href="https://www.allbud.com/marijuana-strains/sativa-dominant-hybrid/blood-orange" target="_blank" title="allbud link"><strong>Blood Orange</strong></a></h4>

<h3 style="text-align:center;">Listening:</h3> 

<h4  style="text-align:center;"><a class="click" href="https://www.youtube.com/thebootlegboy2" target="_blank" title="youtube link"><strong>The Bootleg Boy 2</strong></a></h4>

<h3 style="text-align:center;">Watching:</h3> 

<h4 style="text-align:center;"><strong>Bones</strong></h4>

<h3 style="text-align:center;"> Reading:</h3> 

<h4 style="text-align:center;"><a class="click" href="https://app.thestorygraph.com/books/d828c1b2-785b-4f56-bda7-6e820b3f0777" target="_blank" title="storygraph link"><strong>Fable for the End of the World - Ava Reid</strong></a></h4>

</div>

<h2 style="text-align:center">TOP SECRET</h2>

<div class="box" id="no-click-box" style="text-align:center">

<button class="no-click-button">
<a class="click" href="https://lichenthropic.neocities.org/pages/OnePot.html#One-Pot" target="_blank">
<img class="no-click" src="https://lichenthropic.neocities.org/images/buttons/dont-click-here.gif" alt="do-not-click">
</a>
</button>

</div>

<h2 style="text-align:center"> What do you think<BR/> of my site?</h2>

<div class="box" style="text-align:center;">
<div class="freeze">
<a class="click" href="/pages/guestbook.html" target="_parent">

<img class="button" src="https://lichenthropic.neocities.org/images/buttons/guestbook-button.gif" title="Link to GUESTBOOK" alt="GUESTBOOK"></a>

<a class="click" href="https://neocities.org/site/lichenthropic" target="_blank">
<img class="button" src="https://lichenthropic.neocities.org/images/buttons/NeoCitiesGreen.gif" title="Link to Neocities profile" alt="Neocities button">
</a>
</div>
</div>
<h2 style="text-align:center;"> LIKES </h2>
<div class="box" style="text-align:center;">
<ws-widget class="click" type="like" iid="6130"></ws-widget>
</div>

<h2 style="text-align:center;">♡</h2>

<div class="box" style="text-align:center;">
<div class="freeze" id="buttonbox">
    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/under-construction.gif" title="site always under construction">
    
    <a class="click" href="https://donatemask.ca/request/" target="_parent;">
    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/button-maskup-pink.gif" title="Link for FREE MASKS in Canada!!!" alt="mask up stay safe">
    </a>

    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/potheadblinky.gif" title="Pothead" alt="A button with a cannabis leaf and the word pot head">

    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/dark-mode.gif" title="made for dark mode" alt="made for dark mode">

    <a class="click" href="https://arab.org/click-to-help/palestine/" target="_parent;">
    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/palestine.gif" title="Clicks for Palestine" alt="palestine flag clicks for palestine button with the text from the river to the sea">    
    </a>   
    
    <img class="button" src="https://lichenthropic.neocities.org/images/buttons/fuckai.gif" title="fuck ai" alt="fuck ai button">
</div>
</div>

<style>
body {
width: 100%;
}
#no-click-box   {
height: 6rem;
}

</style>

<script>

function lightmode() {
document.getElementById('colortheme').setAttribute('href', 'https://lichenthropic.neocities.org/stylesheets/light.css');
localStorage.setItem('theme', 'lightmode');}

function darkmode() {
document.getElementById('colortheme').setAttribute('href', 'https://lichenthropic.neocities.org/stylesheets/dark.css');
localStorage.setItem('theme', 'darkmode');}

if(localStorage.getItem('theme') == 'lightmode'){
lightmode();
}

if(localStorage.getItem('theme') == 'darkmode'){
darkmode();
} 

</script>
<style>
/* Preloader */
#preloader {
background: black url("../images/assets/aniglobe.gif") no-repeat center;
align-items: center;
justify-content: center;
width: 100%;
display: flex;
position: fixed;
height: 100vh;
left: 0;
top: 0;
z-index: 9999;
}
</style>
<script>
var loader = document.getElementById("preloader");

function hideLoader() {
if (!loader) return;
fadeOut();
}

function fadeOut() {
var op = 1;
var fade = setInterval(function () {
    op -= 0.1;
    if (op <= 0) {
        clearInterval(fade);
        loader.style.display = "none";
    } else {
        loader.style.opacity = op;
    }
}, 40);
}

// Hide once everything has loaded
window.addEventListener("load", hideLoader);

// Force-hide after 8 seconds even if it can't load
setTimeout(hideLoader, 8000);
</script>
</aside>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = `
	<aside>
		Sidebar2
	</aside>
`;
