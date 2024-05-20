import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
  `;
  main.appendChild(spinner);
};

const initializeEditor = () => {
  try {
    const editor = new Editor();
    if (typeof editor === 'undefined') {
      throw new Error('Editor is undefined');
    }
  } catch (error) {
    console.error('Error initializing the editor:', error);
    loadSpinner();
  }
};

initializeEditor();

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/src-sw.js');
  wb.register().then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
} else {
  console.error('Service workers are not supported in this browser.');
}
