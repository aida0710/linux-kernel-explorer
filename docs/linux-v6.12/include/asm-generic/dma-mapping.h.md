---
sidebar_position: 29
---
# dma-mapping.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/dma-mapping.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_GENERIC_DMA_MAPPING_H
#define _ASM_GENERIC_DMA_MAPPING_H

static inline const struct dma_map_ops *get_arch_dma_ops(void)
{
	return NULL;
}

#endif /* _ASM_GENERIC_DMA_MAPPING_H */

```
