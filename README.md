# producer-budge-generator

[![UpdateData](https://github.com/arrow2nd/producer-budge-generator/actions/workflows/update-data.yaml/badge.svg)](https://github.com/arrow2nd/producer-budge-generator/actions/workflows/update-data.yaml)
[![deno.land](https://img.shields.io/badge/deno-%5E1.15.1-lightgray?logo=deno)](https://deno.land)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/arrow2nd/producer-budge-generator)](https://github.com/arrow2nd/producer-budge-generator/blob/main/LICENSE)

> アイマスアイドルのバッジをつくるやつです

[![我那覇響](https://img.shields.io/badge/IDOLM%40STER-%E6%88%91%E9%82%A3%E8%A6%87%E9%9F%BF-01ADB9)](https://idollist.idolmaster-official.jp/detail/10003)
[![周防桃子](https://img.shields.io/badge/MILLION%20LIVE!-%E5%91%A8%E9%98%B2%E6%A1%83%E5%AD%90-EFB864)](https://idollist.idolmaster-official.jp/detail/30015)
[![白菊ほたる](https://img.shields.io/badge/CINDERELLA%20GIRLS-%E7%99%BD%E8%8F%8A%E3%81%BB%E3%81%9F%E3%82%8B-D162CB)](https://idollist.idolmaster-official.jp/detail/20088)
[![小宮果穂](https://img.shields.io/badge/SHINY%20COLORS-%E5%B0%8F%E5%AE%AE%E6%9E%9C%E7%A9%82-E5461C)](https://idollist.idolmaster-official.jp/detail/50009)
[![天道輝](https://img.shields.io/badge/SideM-%E5%A4%A9%E9%81%93%E8%BC%9D-E31C1A)](https://idollist.idolmaster-official.jp/detail/40034)

↑ こんな感じのバッジを生成します

アイドル名鑑、若しくは所属ブランドの公式サイトへのリンクにもなっているので、宣伝にもなります！

いえー

## ビルドと実行

```sh
# とりあえず実行
yarn dev

# アイドルのリストを更新
deno run --allow-net --allow-write ./tools/create-data.js
```
