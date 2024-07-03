# Angular-Electron template

Este proyecto es un punto de partida para crear aplicaciones de escritorio utilizando Angular, Electron y Electron Forge.

- [Pagina oficial de Angular](https://angular.dev/)
- [Pagina oficial de Electron](https://www.electronjs.org/)
- [Pagina oficial de Electron Forge](https://www.electronforge.io/)

## En que se utiliza cada tecnologia

- **Angular:** para crear la UI.
- **Electron:** para crear la aplicacion de escritorio.
- **Electron Forge:** para optimizar y crear los archivos de produccion.

## Como comenzar a utilizar el proyecto

### Instalacion

Lo primero es instalar todas las dependencias necesarias, para esto utilizamos el comando:

`npm run setup`

### Desarrollando la aplicacion

Cuando queremos desarrollar la aplicacion utilizamos:

`npm start`

### Empaquetando para produccion

Utilizamos una de las siguentes opciones:

- `npm run package`
- `npm run make`
- `npm run publish`

Los archivos generados para produccion se encuentran dentro del directorio **out** en la raiz del proyecto.

**Importante:** para saber que diferencia hay entre package, make y publish, se recomienza leer la siguiente documentacion: https://www.electronforge.io/#building-distributables

### Scripts auxiliares

Los siguientes scripts son utilizados de forma auxiliar:

- start:angular
- start:electron
- build:angular

Estos se utilizan en los scripts run, start, package, make y publish de forma automatica.

## Donde se deberian instalar las dependencias

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

## Anexo

En caso de que quieras crear tu propio template, dejo los pasos que se realizaron durante la creacion de este mismo para que sirvan como referencia.

La idea del template es utilizar dos proyectos diferentes, uno es el de Angular y el otro es el de Electron, y hacerlos trabajar juntos para crear la aplicacion.

**1 - Crear el directorio con el nombre del proyecto**

`md angular-electron-template`

**2 - Entrar al directorio**

`cd angular-electron-template`

**3 - Recomendacion: Iniciar el repositorio de git**

`git init`

Es recomendable iniciar git en la raiz del proyecto para incluir los archivos de Angular y Electron.

Si creamos el proyecto de Angular sin haber inicializado el repositorio de git, Angular inicializara el repositorio dentro de su carpeta durante la creacion del proyecto, dejando afuera a los archivos de Electron.

Si luego queremos inicializar un proyecto de git en la raiz del proyecto para incluir tambien los archivos de Electron, surgira un conflicto con los repositorios.

**4 - Crear el proyecto de Angular**

`ng new angular`

**5 - Crear el proyecto de Electron con Electron Forge usando el template de webpack y typescript**

`npm init electron-app@latest electron -- --template=webpack-typescript`

**6 - Realizar las modificaciones necesarias en los archivos del proyecto**

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

## Contacto

Cualquier duda, sugerencia o si queres participar en la mejora de este template, podes escribirme a **matias33pascual@gmail.com**

Atte. Matias.
