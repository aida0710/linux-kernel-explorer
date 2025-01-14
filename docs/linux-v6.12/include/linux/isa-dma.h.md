---
sidebar_position: 589
---
# isa-dma.h

### ファイル情報

- パス: `linux-v6.12/include/linux/isa-dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __LINUX_ISA_DMA_H
#define __LINUX_ISA_DMA_H

#include <asm/dma.h>

#if defined(CONFIG_PCI) && defined(CONFIG_X86_32)
extern int isa_dma_bridge_buggy;
#else
#define isa_dma_bridge_buggy	(0)
#endif

#endif /* __LINUX_ISA_DMA_H */

```
