<div align="center">
  <h1>
    <code>Fastify Typescript API</code>
  </h1>

  <p>
    <strong>🎯 A reliable and performant server boilerplate with Fastify, also production-prepared! 🎯</strong>
  </p>

  <p>
    <img
      alt="GitHub top language"
      src="https://img.shields.io/github/languages/top/kauefraga/fastify-ts-api.svg"
    />
    <img
      alt="Repository size"
      src="https://img.shields.io/github/repo-size/kauefraga/fastify-ts-api.svg"
    />
    <a href="https://github.com/kauefraga/fastify-ts-api/commits/main">
      <img
        alt="GitHub last commit"
        src="https://img.shields.io/github/last-commit/kauefraga/fastify-ts-api.svg"
      />
    </a>
    <img
      alt="GitHub LICENSE"
      src="https://img.shields.io/github/license/kauefraga/fastify-ts-api.svg"
    />
  </p>
</div>

> I already have an express typescript api boilerplate, so i just wanted to create the same result with other web framework. I'm also building [zssn](https://github.com/kauefraga/zssn) with the Fastify framework and i enjoyed it.

### Features

- Server built with [Fastify](https://fastify.io) framework that is fast and low overhead.
- The simplicity of the structure is something: http (with the server), core (business logic) and infra (database...)

## ⬇️ How to install and use it

1. Clone the repository and rename it.
2. Install the dependencies.
3. Build and start the server.
4. Done! Access it at http://localhost:3333/v1.

```bash
git clone https://github.com/kauefraga/fastify-ts-api.git {your-project-name}

cd {your-project-name}

pnpm i --frozen-lockfile

pnpm build
pnpm start

curl http://localhost:3333/v1
```
You are welcome to open issues and pull requests!

## 🛠 Technologies

The following packages have been used to build the project:

- [Fastify](https://www.npmjs.com/package/fastify) - An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. Framework based on plugins.
  - [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) - Allows you to control who can access your Fastify application.
  - [@fastify/rate-limit](https://www.npmjs.com/package/@fastify/rate-limit) - Controls the request rate limit of your API.
- [Typescript](https://typescriptlang.org), [tsx](https://www.npmjs.com/package/tsx) and [tsup](https://www.npmjs.com/package/tsup) - Improve the DX by adding type safety and a blazingly fast execution/build provided by esbuild
- [Eslint](https://npm.im/eslint-config-airbnb-typescript) - Code ruler/styler with Airbnb style guide for typescript.
- [Vitest](https://vitest.dev) - Implements Jest but with its own ESbuider (out of box typescript, esmodules and so on).


## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/fastify-ts-api/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by black magic" src="https://forthebadge.com/images/badges/powered-by-black-magic.svg">
</div>
