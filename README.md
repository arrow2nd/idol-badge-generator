# producer-budge-generator

[![UpdateData](https://github.com/arrow2nd/producer-budge-generator/actions/workflows/update-data.yaml/badge.svg)](https://github.com/arrow2nd/producer-budge-generator/actions/workflows/update-data.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/arrow2nd/producer-budge-generator)](https://github.com/arrow2nd/producer-budge-generator/blob/main/LICENSE)

> 担当アイドルのバッジをつくるやつです

[![我那覇響](https://img.shields.io/badge/%E6%8B%85%E5%BD%93-%E6%88%91%E9%82%A3%E8%A6%87%E9%9F%BF-01ADB9?style=for-the-badge)](https://idollist.idolmaster-official.jp/detail/10003)
[![小宮果穂](https://img.shields.io/badge/%E6%8B%85%E5%BD%93-%E5%B0%8F%E5%AE%AE%E6%9E%9C%E7%A9%82-E5461C?style=flat-square)](https://idollist.idolmaster-official.jp/detail/50009)
[![七草にちか](https://img.shields.io/badge/%E6%8B%85%E5%BD%93-%E4%B8%83%E8%8D%89%E3%81%AB%E3%81%A1%E3%81%8B-A5CFB6)](https://idollist.idolmaster-official.jp/detail/50024)

↑ こんな感じのバッジを生成します

クリックしたらアイドル名鑑に飛ぶので、宣伝にもなります

いえー

## ビルドと実行

```sh
# とりあえず実行
yarn dev

# アイドル名のリストを更新
deno run --allow-net --allow-write ./tools/create-data.js
```
