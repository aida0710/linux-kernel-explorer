---
sidebar_position: 12
---
# blake2s-glue.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/crypto/blake2s-glue.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later

#include <crypto/internal/blake2s.h>
#include <linux/module.h>

/* defined in blake2s-core.S */
EXPORT_SYMBOL(blake2s_compress);

```
