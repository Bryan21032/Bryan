;

 var visible = false; 
 function iniciar() { 
 var elemento = document.getElementById("menu-img"); 
 elemento.addEventListener("click", mostrarMenu); 
 } 
 function mostrarMenu() { 
 var elemento = document.getElementById("menuprincipal"); 
 if (!visible) { 
 elemento.style.display = "flex"; 
 visible = true; 
 } else { 
 elemento.style.display = "none"; 
 visible = false; 
 } 
 } 
 window.addEventListener("load", iniciar); 

function isCompatible(item) {
  // En la vida real es muy probable que tenga aquí reglas más complejas
  return ['Chromium', 'Google Chrome', 'NewBrowser'].includes(item.brand);
}
navigator.userAgentData;

if ('serviceWorker' in navigator.userAgentData) {
    navigator.userAgentData.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      
  }
