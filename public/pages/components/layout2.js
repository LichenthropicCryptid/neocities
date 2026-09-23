async function loadComponent(id, file) {
    const response = await fetch(file)
    const text = await response.text(
    
    document.getElementById(id).innerHTML = text)
    }
    
    document.addEventListener("DOMContentLoaded", async () => {
    
    await Promise.all([
    loadComponent("header", "/components/header.html"),
    loadComponent("footer", "/components/footer.html"),
    loadComponent("l-sidebar", "/components/leftsidebar2.html"),
    loadComponent("r-sidebar", "/components/rightsidebar2.html")
    ],
    
    document.dispatchEvent(new Event("componentsLoaded")
    ,
)
)
})
