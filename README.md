# Angular-Electron template

Este proyecto crea un punto de partida simple para crear aplicaciones de escritorio utilizando Angular y Electron.

### Tecnologias utilizadas

- **Angular:** para crear la UI.
- **Electron:** para crear la aplicacion de escritorio.
- **Electron forge con webpack:** para optimizar y crear los archivos de produccion.

---

### Como utilizar los scripts del proyecto

#### Instalacion

`npm run setup`

#### Para desarrollar

`npm start`

#### Para empaquetar para produccion

Utilizar una de las siguentes opciones:

- `npm run package`
- `npm run make`
- `npm run publish`

Los archivos generados para produccion se encuentran dentro del directorio **out** en la raiz del proyecto.

---

### Como instalar dependencias

Si la dependencia es para utilizar en Angular, entrar al directorio de angular e instalarla ahi.

Por ejemplo

- `cd angular`
- `npm i dependencia-de-angular`

Si la dependencia es de Electron, entrar al directorio de electron e instalarla ahi.

Por ejemplo

- `cd electron`
- `npm i dependencia-de-electron`

Si la dependencia va a ser utilizada en el proyecto general sin que sea especifica de Angular o de Electron, instalarla en el directorio raiz del proyecto.

Por ejemplo

- `npm i dependencia-general`

---

### Pasos para crear el template

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
