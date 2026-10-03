
// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerE1);

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
		<a id="top"></a>
    <div class="fairy-container">
		<details class="accessability-menu">
        <summary>
          <div>
            <img id="access-fairy" src="https://lichenthropic.neocities.org/images/assets/navi.gif" title="accessability fairy" alt="accessability menu" width="100px">
          </div>
            <br/>
        </summary>
        <div class="accessability">
          ACCESSABILITY
          <br/>
            <div class="access-options">
              <button class="toggle-gif">GIF</button>
              <button class="filter" onclick="crtoff(), location.reload()">CRT OFF</button>
              <button class="filter" onclick="crton(), location.reload()">CRT ON</button>
              <button class="colortheme" onclick="darkmode(), location.reload()">DARK</button>
              <button class="colortheme" onclick="lightmode(), location.reload()">LIGHT</button>
            </div>
        </div>
      </details>
    </div>
    <style>
    #access-fairy   {
      position:fixed;
      left: 3rem;
      top: 3rem;
      border-radius: 5rem;
      background-color:#ff0a789f;
      -webkit-box-shadow: 0px 0px 50px 30px #ff0a78c0; 
      box-shadow: 0px 0px 50px 30px #ff0a78c0;
      z-index: 100;
      opacity: 60%;
  }

      #access-fairy:hover {
              opacity: 100%;
          }

  .accessability  {
      color: whitesmoke;
      position: fixed;
      left: 10rem;
      top:6rem;
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.922);
      border-radius: 1rem;
      width: 12rem;
      padding: 1rem;
      z-index: 100;
  }


  .colortheme {
      width: 5rem;
      border-radius: 1rem;
      padding: .5rem;
      margin: 0 auto;
  }

  .toggle-gif {
      width: 5rem;
      border-radius: 1rem;
      padding: .5rem;
      margin: 0 auto;
  }

  .filter {
      width: 5rem;
      border-radius: 1rem;
      padding: .5rem;
      margin: 0 auto;
  }
    </style>
`;