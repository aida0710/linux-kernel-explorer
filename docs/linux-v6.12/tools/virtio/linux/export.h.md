---
sidebar_position: 8
---
# export.h

### ファイル情報

- パス: `linux-v6.12/tools/virtio/linux/export.h`

### コンテンツ

```h
#define EXPORT_SYMBOL_GPL(sym) extern typeof(sym) sym
#define EXPORT_SYMBOL(sym) extern typeof(sym) sym


```
