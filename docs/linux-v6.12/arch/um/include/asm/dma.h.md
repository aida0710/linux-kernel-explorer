---
sidebar_position: 9
---
# dma.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/asm/dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __UM_DMA_H
#define __UM_DMA_H

#include <asm/io.h>

extern unsigned long uml_physmem;

#define MAX_DMA_ADDRESS (uml_physmem)

#endif

```
