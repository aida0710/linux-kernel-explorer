---
sidebar_position: 10
---
# bad-samekey.bconf

### ファイル情報

- パス: `linux-v6.12/tools/bootconfig/samples/bad-samekey.bconf`

### コンテンツ

```bconf
# Same key value is not allowed
key {
	foo = value
	bar = value2
}
key.foo = value

```
