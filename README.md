# producer-budge-generator

> 担当アイドルのバッジをつくるやつです

[![我那覇響](https://img.shields.io/badge/%E6%8B%85%E5%BD%93-%E6%88%91%E9%82%A3%E8%A6%87%E9%9F%BF-01ADB9?style=for-the-badge)](https://idollist.idolmaster-official.jp/detail/10003)

[![七草にちか](https://img.shields.io/badge/%E6%8B%85%E5%BD%93-%E4%B8%83%E8%8D%89%E3%81%AB%E3%81%A1%E3%81%8B-A5CFB6)](https://idollist.idolmaster-official.jp/detail/50024)

↑こんな感じ

クリックしたらアイドル名鑑に飛ぶので、宣伝にもなります。

いえー

## ビルドと実行

```sh
# とりあえず実行
yarn dev

# アイドル名のリストを更新
deno run --allow-net --allow-write  ./tools/create-data.js
```
