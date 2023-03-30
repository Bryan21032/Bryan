;
if ('serviceWorker' in navigator.userAgentData) {
    navigator.userAgentData.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      
  }