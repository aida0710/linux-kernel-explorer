---
sidebar_position: 4
---
# dma.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/sibyte/common/dma.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0+
/*
 *	DMA support for Broadcom SiByte platforms.
 *
 *	Copyright (c) 2018  Maciej W. Rozycki
 */

#include <linux/swiotlb.h>
#include <asm/bootinfo.h>

void __init plat_swiotlb_setup(void)
{
	swiotlb_init(true, SWIOTLB_VERBOSE);
}

```
