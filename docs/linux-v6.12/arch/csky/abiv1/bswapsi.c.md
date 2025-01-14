---
sidebar_position: 3
---
# bswapsi.c

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv1/bswapsi.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (C) 2018 Hangzhou C-SKY Microsystems co.,ltd.

#include <linux/export.h>
#include <linux/compiler.h>
#include <uapi/linux/swab.h>

unsigned int notrace __bswapsi2(unsigned int u)
{
	return ___constant_swab32(u);
}
EXPORT_SYMBOL(__bswapsi2);

```
