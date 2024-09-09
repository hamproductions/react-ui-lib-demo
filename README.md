---
marp: true
title: Reactライブラリー・UIコンポーネントいろいろ
theme: default
size: 4:3
headingDivider: 3
paginate: true
header: "**React Styling**"
# footer: "hoge"
---
<!-- 
_header: ""
_footer: ""
_paginate: false
-->

# Reactスタイリング、ライブリーなどなど

## スタイリング法方

### CSS

**メリット**
- CSSそのまま
- CSSに慣れている人にすぐ使える

**デメリット**
- CSS
  
- Tailwind CSS, Uno CSS

### CSS Modules

**メリット**
- CSSそのまま
- classが他のファイルに混合しない

**デメリット**
- ほぼCSS

### CSS-in-JS

- Styled Components
- Emotion
- Panda
- StyleX
- Vanila Extract
- https://danielnagy.me/posts/Post_jt4adn0o5bnr
- https://playfulprogramming.com/posts/why-is-css-in-js-slow

**メリット**
- 使いやすい（かも）

**デメリット**
- FOUC

## コンポーネントライブラリー

**メリット**
- 統一感
- 大体ベストプラクティスがついている（アクセシビリティなど）

**デメリット**
- カスタマイズ性
- 使いにくい、学習する必要あり

### CSSのみ

- Bootstrap
- [Semantic UI](https://semantic-ui.com/)
- [DaisyUI](https://daisyui.com/)

### ヘッドレス（JSのみ）

- [headless-ui](https://headlessui.com/)
- [react-aria](https://react-spectrum.adobe.com/react-aria)
- [Ark UI](https://ark-ui.com/)
- [mui](https://mui.com/)
- [Radix UI](https://www.radix-ui.com/)

### スタイル付きライブラリー

- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [Ant Design](https://ant.design/)
- [shadcn/ui](https://ui.shadcn.com/)
- [MaterialUI](https://mui.com/material-ui/)
- [Mantine](https://mantine.dev/)
- [NextUI](https://nextui.org/)
- [Prime React](https://primereact.org/)
- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)
- [Tailwind Elements](https://tw-elements.com/)
- [chakra](https://v2.chakra-ui.com/)

### React以外にも使える

Vue/Svelte/SolidJSなど
- [Park UI](https://park-ui.com/) 
- [Agnostic UI](https://www.agnosticui.com/docs/setup.html)
- [Flowbite](https://flowbite.com/)
- [headless-ui](https://headlessui.com/)
- [Ark UI](https://ark-ui.com/)
  
React Native
- [gluestack-ui](https://gluestack.io/)
- [Tamagui](https://tamagui.dev/)


## 選択するにあたって考慮する分野

### 実装する側

- 提供するComponentsが使い用途に充実したかどうか
- Server Componentsの対応
- Design Systemの対応
- カスタマイズ生
- 安定性
- DX・使いやすさ
- コード量
- フォームライブラリー相互性
- 学習曲線
- トークン対応
- チームメンバー

### 使う側
- アクセシビリティ
- 見た目・UX・雰囲気
- テーマ・ダークモード対応
- パフォーマンス


## 引用

- https://2023.stateofreact.com/en-US/libraries/component-libraries/#css_tools
- https://github.com/jxom/awesome-react-headless-components
- https://backlight.dev/mastery/best-react-component-libraries-for-design-systems
- https://github.com/brillout/awesome-react-components
  
<!-- ## 比較する

|名前|スタイル法方|Headless|Server Components|Design System|
|---|---|---|
|Tailwind||CSS|✖︎| -->

