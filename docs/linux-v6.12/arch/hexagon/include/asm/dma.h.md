---
sidebar_position: 9
---
# dma.h

### ファイル情報

- パス: `linux-v6.12/arch/hexagon/include/asm/dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2010-2011, The Linux Foundation. All rights reserved.
 */

#ifndef _ASM_DMA_H
#define _ASM_DMA_H

#include <asm/io.h>

#define MAX_DMA_CHANNELS 1
#define MAX_DMA_ADDRESS  (PAGE_OFFSET)

extern size_t hexagon_coherent_pool_size;

#endif

```
