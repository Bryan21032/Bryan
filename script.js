;
function isCompatible(item) {
  // En la vida real es muy probable que tenga aquí reglas más complejas
  return ['Chromium', 'Google Chrome', 'NewBrowser'].includes(item.brand);
}
navigator.userAgentData;

if ('serviceWorker' in navigator.userAgentData) {
    navigator.userAgentData.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      
  }
