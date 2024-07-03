# Angular-Electron template

Este proyecto crea un punto de partida para crear aplicaciones de escritorio utilizando Angular y Electron.

- [Pagina oficial de Angular](https://angular.dev/)
- [Pagina oficial de Electron](https://www.electronjs.org/)
- [Pagina oficial de Electron Forge](https://www.electronforge.io/)

---

### Tecnologias utilizadas

- **Angular:** para crear la UI.
- **Electron:** para crear la aplicacion de escritorio.
- **Electron forge con webpack:** para optimizar y crear los archivos de produccion.

---

### Como comenzar a utilizar el proyecto:

#### Instalacion

Lo primero es instalar todas las dependencias necesarias, para esto utilizamos el comando:

`npm run setup`

#### Desarrollando la aplicacion

Cuando queremos desarrollar la aplicacion utilizamos:

`npm start`

#### Empaquetando para produccion

Utilizamos una de las siguentes opciones:

- `npm run package`
- `npm run make`
- `npm run publish`

Los archivos generados para produccion se encuentran dentro del directorio **out** en la raiz del proyecto.

**Importante:** para saber que diferencia hay entre package, make y publish, se recomienza leer la siguiente documentacion: https://www.electronforge.io/#building-distributables

---

### Donde se deberian instalar las dependencias

Es probable que desees instalar dependencias en tu aplicacion, para esto debes tener en cuenta lo siguiente:

Si la dependencia es para utilizar en Angular, entra al directorio angular y realiza la instalacion desde ese directorio.

Por ejemplo

- `cd angular`
- `npm install dependencia-de-angular`

Si la dependencia es para utilizar en Electron, entra al directorio electron y realiza la instalacion desde ese directorio.

Por ejemplo

- `cd electron`
- `npm install dependencia-de-electron`

Si la dependencia va a ser utilizada en el proyecto sin que sea especifica de Angular o de Electron, deberias instalarla desde el directorio raiz del proyecto.

Por ejemplo

- `npm install dependencia`

---

### Anexo

En caso de que quieras crear tu propio template, dejo los pasos que se realizaron durante la creacion de este mismo template para que sirvan como referencia.

**1 - Crear el directorio con el nombre del proyecto**

`md angular-electron-template`

**2 - Entrar al directorio**

`cd angular-electron-template`

**3 - Iniciar el repositorio de git. Esto es necesario para evitar que el proyecto de Angular inicie un repositorio**

`git init`

**4 - Crear el proyecto de Angular**

`ng new angular`

**5 - Crear el proyecto de Electron con Electron Forge usando el template de webpack y typescript**

`npm init electron-app@latest electron -- --template=webpack-typescript`

**6 - Configurar los packages y archivos de configuracion del proyecto**

Estos archivos ya estan configurados dentro del proyecto actual. Se pueden tomar como referencia.

- package.json
- electron/package.json
- electron/forge.config.ts
- electron/webpack.main.config.ts
- electron/webpack.plugins.ts
- electron/webpack.renderer.config.ts
- electron/src/index.ts
- angular/package.json
- angular/angular.json
