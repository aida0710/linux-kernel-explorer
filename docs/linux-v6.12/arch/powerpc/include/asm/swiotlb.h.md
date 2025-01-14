---
sidebar_position: 264
---
# swiotlb.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/include/asm/swiotlb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (C) 2009 Becky Bruce, Freescale Semiconductor
 */

#ifndef __ASM_SWIOTLB_H
#define __ASM_SWIOTLB_H

#include <linux/swiotlb.h>

extern unsigned int ppc_swiotlb_enable;
extern unsigned int ppc_swiotlb_flags;

#ifdef CONFIG_SWIOTLB
void swiotlb_detect_4g(void);
#else
static inline void swiotlb_detect_4g(void) {}
#endif

#endif /* __ASM_SWIOTLB_H */

```
