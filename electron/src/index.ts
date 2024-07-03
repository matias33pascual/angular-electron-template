import { app, BrowserWindow } from "electron";
import path from "path";

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.resolve(__dirname, "./../renderer/main_window/preload.js"),
    },
  });

  if (process.env.NODE_ENV === "production") {
    const fileUrl = path.resolve(__dirname, "./../renderer/dist", "index.html");
    mainWindow.loadFile(fileUrl);
  } else {
    const serverUrl = "http://localhost:4200";
    mainWindow.loadURL(serverUrl);
  }

  if (process.env.NODE_ENV !== "production") {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.setMenu(null);
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
