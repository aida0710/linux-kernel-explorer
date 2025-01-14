---
sidebar_position: 134
---
# simd.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/simd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#include <linux/hardirq.h>

static __must_check inline bool may_use_simd(void)
{
	return IS_ENABLED(CONFIG_KERNEL_MODE_NEON) && !in_hardirq();
}

```
