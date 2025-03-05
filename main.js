const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;
let splashWindow;

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: false,
    transparent: true,
    icon: path.join(__dirname, 'assets/AGGDM Logo.png'),
    alwaysOnTop: true
  });
  splashWindow.loadFile('splash.html');
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    show: false,
    icon: path.join(__dirname, 'assets/AGGDM Logo.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createSplashWindow();
  createMainWindow();
  
  // Ferme le splash et montre la fenêtre principale après 3 secondes
  mainWindow.once('ready-to-show', () => {
    setTimeout(() => {
      splashWindow.close();
      mainWindow.show();
    }, 3000);
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
