# gatsby-atomic-design-starter

[Gatsby](https://www.gatsbyjs.org/) で作成されたブログにatomic designの設計を適用してみる実験リポジトリ

## 使用しているもの

- [Gatsby](https://www.gatsbyjs.org/) 
- [styled-components](https://www.styled-components.com/)
- [luxon](https://moment.github.io/luxon/index.html)

## getting started

```
// gatsby-cliをインストール
npm install --global gatsby-cli

// リポジトリをclone

// npm packaagesのインストール
yarn install

// devサーバー起動
gatsby develop
```

## このリポジトリ内でのatomic design

[Atomic Design ~堅牢で使いやすいUIを効率良く設計する](http://amzn.asia/d/8uP6MDM)がベースです

- atoms: 「それ以上UIとして機能性を破壊しない最小要素」
- molecules: 「ユーザーの具体的な動機に応える機能」
- organisms: 「コンポーネントで完結するコンテンツを提供」
- templates: Organisms / Molecules / Atomsコンポーネントを実際に配置して、正しくレイアウトする
- pages: Templateコンポーネントに実際のコンテンツを流し込んだもの

## Todos

- [ ] tags配下にもatomic design適用してみる
- [ ] ブログの各記事のページにタグとdateを表示させる