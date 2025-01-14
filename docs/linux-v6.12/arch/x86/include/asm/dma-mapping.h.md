---
sidebar_position: 61
---
# dma-mapping.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/dma-mapping.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_X86_DMA_MAPPING_H
#define _ASM_X86_DMA_MAPPING_H

extern const struct dma_map_ops *dma_ops;

static inline const struct dma_map_ops *get_arch_dma_ops(void)
{
	return dma_ops;
}

#endif

```
