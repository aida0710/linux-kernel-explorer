---
sidebar_position: 5
---
# kasan.config

### ファイル情報

- パス: `linux-v6.12/arch/s390/configs/kasan.config`

### コンテンツ

```config
# Help: Enable KASan for debugging
CONFIG_KASAN=y
CONFIG_KASAN_INLINE=y
CONFIG_KASAN_VMALLOC=y

```
