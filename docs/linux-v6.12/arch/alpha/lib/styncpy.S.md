---
sidebar_position: 49
---
# styncpy.S

### ファイル情報

- パス: `linux-v6.12/arch/alpha/lib/styncpy.S`

### コンテンツ

```S
#include "strncpy.S"
#ifdef CONFIG_ALPHA_EV67
#include "ev67-strncat.S"
#else
#include "strncat.S"
#endif
#ifdef CONFIG_ALPHA_EV6
#include "ev6-stxncpy.S"
#else
#include "stxncpy.S"
#endif

```
