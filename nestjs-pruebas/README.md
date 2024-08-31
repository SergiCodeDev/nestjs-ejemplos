<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# NestJS Ejemplos

Este repositorio contiene ejemplos y comandos básicos para trabajar con NestJS. A continuación, se describen las instrucciones para la instalación, creación de proyectos y otros comandos útiles.

## Instalación Global

Para poder ejecutar comandos de NestJS desde cualquier lugar, instala el CLI de NestJS de manera global:

```bash
npm install -g @nestjs/cli
```

## Crear un Nuevo Proyecto

Para crear un nuevo proyecto con NestJS, utiliza el siguiente comando:

```bash
nest new nombre-proyecto
```

## Comandos de Producción

Para ejecutar el proyecto en modo producción:

```bash
npm start
```

## Linter

Para analizar el código con el linter configurado:

```bash
npm run lint
```

## Generar Módulos

Puedes generar un nuevo módulo utilizando el siguiente comando:

```bash
nest generate module nombre-modulo
```

O de forma abreviada:

```bash
nest g mo nombre-modulo
```

Ejemplos:

```bash
npx nest g mo auth
```

## Generar Controladores

Para generar un nuevo controlador:

```bash
npx nest generate controller nombre-controlador
```

Si deseas generar un controlador sin el archivo de pruebas (`.spec.ts`):

```bash
npx nest generate controller nombre-controlador --no-spec
```

Ejemplo:

```bash
npx nest generate controller auth --no-spec
```

## Generar Servicios

Para generar un nuevo servicio:

```bash
npx nest g service nombre-servicio
```

Ejemplo:

```bash
npx nest g service users
```

## Validaciones

Para agregar soporte de validaciones en el proyecto, instala los siguientes paquetes:

```bash
npm install --save class-validator class-transformer
```

## Crear Pipes Personalizados

Para generar un pipe personalizado:

```bash
npx nest g pipe ruta/nombre-pipe
```

Ejemplo:

```bash
npx nest g pipe hello/pipes/validateuse
```

## Crear Guards

Para generar un guard:

```bash
npx nest g guard ruta/nombre-guard
```

Ejemplo:

```bash
npx nest g guard hello/guards/auth
```

## Crear Middleware

Para generar un middleware:

```bash
npx nest g middleware ruta/nombre-middleware
```

Ejemplo:

```bash
npx nest g middleware users/logger
```

## Crear Recursos (CRUD, WebSockets, etc.)

Para generar un recurso completo que incluye controlador, servicio, módulo y otros elementos (CRUD, WebSockets, etc.):

```bash
npx nest g resource nombre-recurso
```

Ejemplo:

```bash
npx nest g resource payments
```

## Levantar Docker Compose

Para iniciar los servicios definidos en un archivo `docker-compose.yml`:

```bash
docker compose up -d
```
