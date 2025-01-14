---
sidebar_position: 30
---
# dma.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef __ASM_DMA_H
#define __ASM_DMA_H

#define MAX_DMA_ADDRESS	PAGE_OFFSET
#define MAX_DMA32_PFN	(1UL << (32 - PAGE_SHIFT))

#endif

```
