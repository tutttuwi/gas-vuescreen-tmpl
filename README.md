# gas-vuescreen-tmpl

## SETUP

### 環境例

```cmd
node -v
v20.12.2

npm -v
10.5.0

yarn -v
1.21.1

```

### 環境構築

- nodejs LTS インストール

- yarn global install

```cmd
npm install yarn -g
yarn -v

```

- プロジェクトフォルダ直下に「.clasp.json」作成
  - 自分のスクリプトIDを設定すること

```json
{
    "scriptId": "your-script-id",
    "rootDir": "./dist"
}

```

- ビルド

```cmd
yarn install
cd ./backend
yarn install
cd ../frontend
yarn install

cd ../
yarn build

rem buildが完了することを確認

```

- デプロイごとにURLが変わってしまうことを防ぐために事前に開発用と本番用のリビジョンを作成しておく

```cmd
rem リビジョン数を確認する
clasp versions

rem リビジョン数が2個未満の場合、デプロイを2回繰り返し、開発用と本番用のリビジョンを作成する
yarn run deploy
yarn run deploy

rem リビジョン数を確認し、開発用と本番用のIDとして利用する
clasp versions

```

- 「package.json」のスクリプト書き換え
  - yarn コマンドで実行するスクリプトの引数に、自分のデプロイIDを設定する
  - `[HEAD_ID]`:HEADバージョンのIDを指定
  - `[DEV_ID]`:開発用のIDを指定
  - `[PROD_ID]`:本番用のIDを指定

```json
  "scripts": {
    "build:backend": "yarn workspace backend run build",
    "build:frontend": "yarn workspace frontend run build",
    "build": "yarn run build:frontend && yarn run build:backend",
    "push": "clasp push",
    "open": "clasp open --webapp --deploymentId [HEAD_ID]",
    "open:dev": "clasp open --webapp --deploymentId [DEV_ID]",
    "open:prod": "clasp open --webapp --deploymentId [PROD_ID]",
    "gen-dts": "yarn workspace backend run gen-dts",
    "deploy": "clasp deploy",
    "deploy:dev": "clasp deploy -i [DEV_ID]",
    "deploy:prod": "clasp deploy -i [PROD_ID]"
  },
```

- GASプロジェクトをHEADバージョンで開く

```cmd
yarn run build
yarn run push
yarn run open

rem 問題なく画面を開くことができたら完了
```

## Customize

### ファビコン設定

- ファビコン設定したいpngファイルをGoogleドライブにアップロード
- ファイル共有からファイルIDを取得
- 下記形式で`backend/Code.ts`の以下の行を変更
  - <https://drive.google.com/uc?id=[ファイルID]&.png>

```ts
    .setFaviconUrl(
      "https://drive.google.com/uc?id=1HOlf2gOMPAS6IECjttZmzQDqkzpV9GBC&.png",
    )
```




