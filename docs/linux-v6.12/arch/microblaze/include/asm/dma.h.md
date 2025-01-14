---
sidebar_position: 10
---
# dma.h

### ファイル情報

- パス: `linux-v6.12/arch/microblaze/include/asm/dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2006 Atmark Techno, Inc.
 */

#ifndef _ASM_MICROBLAZE_DMA_H
#define _ASM_MICROBLAZE_DMA_H

/* Virtual address corresponding to last available physical memory address.  */
#define MAX_DMA_ADDRESS (CONFIG_KERNEL_START + memory_size - 1)

#endif /* _ASM_MICROBLAZE_DMA_H */

```
