# Learn HonoHub
<!-- ![Status: ToDo](https://flat.badgen.net/static/Status/ToDo/red) -->
![Status: In Progress](https://flat.badgen.net/static/Status/In%20Progress/yellow)
<!-- ![Status: Done](https://flat.badgen.net/static/Status/Done/green) -->

## 本リポジトリの目的
HonoHubを使ってWikiの管理画面を作りたい

## 本リポジトリの達成目標
- [x] Node.js環境上で動くHonoをセットアップする
- [ ] HonoHubをセットアップする

## 遭遇したエラー
### HonoHubセットアップ時にPlugin周りでエラーが発生？
以下のエラーが発生し、HonoHubが立ち上がらなかった。

```
[honhub-rest-api] Hub Plugin Bootstrap Error TypeError: m.returning is not a function
    at s (/home/windchime-yk/dev/playground/learn-honohub/node_modules/.pnpm/honohub@0.3.0_drizzle-orm@0.44.2_@tidbcloud+serverless@0.2.0_mysql2@3.14.1__hono@4.7.11/node_modules/honohub/index.cjs.js:1:1008)
    at Object.bootstrap (/home/windchime-yk/dev/playground/learn-honohub/node_modules/.pnpm/honohub@0.3.0_drizzle-orm@0.44.2_@tidbcloud+serverless@0.2.0_mysql2@3.14.1__hono@4.7.11/node_modules/honohub/index.cjs.js:1:5368)
    at i (/home/windchime-yk/dev/playground/learn-honohub/node_modules/.pnpm/honohub@0.3.0_drizzle-orm@0.44.2_@tidbcloud+serverless@0.2.0_mysql2@3.14.1__hono@4.7.11/node_modules/honohub/index.cjs.js:1:261)
    at exports.createHub (/home/windchime-yk/dev/playground/learn-honohub/node_modules/.pnpm/honohub@0.3.0_drizzle-orm@0.44.2_@tidbcloud+serverless@0.2.0_mysql2@3.14.1__hono@4.7.11/node_modules/honohub/index.cjs.js:1:5634)
    at <anonymous> (/home/windchime-yk/dev/playground/learn-honohub/src/index.ts:6:35)
    at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)
```

## 参考資料
- [Drizzle ORM - MySQL](https://orm.drizzle.team/docs/get-started/tidb-new)
- [Drizzle ORM - TiDB](https://orm.drizzle.team/docs/connect-tidb)
- [Quickstart | HonoHub](https://honohub.dev/quickstart)
