# Grey-Slime

基于 Hono.js 构建的轻量级 Node.js 服务端项目。

## 特性

- 使用 [Hono.js](https://hono.dev/) 作为 Web 框架
- TypeScript 支持
- 快速开发环境设置
- 简洁高效的 API 路由

## 安装

```bash
# 使用 npm
npm install

# 使用 pnpm (推荐)
pnpm install
```

## 开发

```bash
# 启动开发服务器
npm run dev

# 或使用 pnpm
pnpm dev
```

开发服务器将在 http://localhost:3000 上启动。

## 项目结构

```
grey-slime/
├── src/
│   └── index.ts     # 应用程序入口点
├── .prettierrc      # Prettier 配置
├── tsconfig.json    # TypeScript 配置
├── package.json     # 项目依赖
└── README.md        # 项目文档
```

## 构建工具

- **TypeScript**: 类型安全的 JavaScript 超集
- **tsx**: 用于执行 TypeScript 代码的工具
- **Hono.js**: 轻量级、高性能的 Web 框架
- **@hono/node-server**: Hono 的 Node.js 服务器适配器

## 许可证

[MIT](LICENSE)

```
open http://localhost:3000
```
