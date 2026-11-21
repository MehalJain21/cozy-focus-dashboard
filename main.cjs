
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Create desktop window
function createWindow() {

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 320,
    minHeight: 500,

    icon: path.join(__dirname, 'public/icons/icon.ico'),

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }

  });


// Load React application
if (app.isPackaged) {
  win.loadFile(path.join(__dirname, 'dist', 'index.html'))
    .catch((error) => {
      console.error('Dashboard loading error:', error);
    });
} else {
  win.loadURL('http://localhost:5173');
}


}

// Start Electron
app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

});

// Close application on Windows/Linux
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
