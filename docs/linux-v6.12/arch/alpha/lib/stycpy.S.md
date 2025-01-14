---
sidebar_position: 48
---
# stycpy.S

### ファイル情報

- パス: `linux-v6.12/arch/alpha/lib/stycpy.S`

### コンテンツ

```S
#include "strcpy.S"
#ifdef CONFIG_ALPHA_EV67
#include "ev67-strcat.S"
#else
#include "strcat.S"
#endif
#ifdef CONFIG_ALPHA_EV6
#include "ev6-stxcpy.S"
#else
#include "stxcpy.S"
#endif

```
