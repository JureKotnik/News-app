const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
         fullscreen: true,
        icon: 'download.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('test.html')
}

app.on('ready', createWindow)