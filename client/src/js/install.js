const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
   //removes hidden class from button
    butInstall.classList.toggle('hidden', false);
});

//implements a click event
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }
//shows prompt
  promptEvent.prompt();
  //resets the differed prompt value it can only be used once
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clears prompt
    window.deferredPrompt = null;
});
