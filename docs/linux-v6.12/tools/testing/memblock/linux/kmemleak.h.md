---
sidebar_position: 2
---
# kmemleak.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/memblock/linux/kmemleak.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef _KMEMLEAK_H
#define _KMEMLEAK_H

static inline void kmemleak_free_part_phys(phys_addr_t phys, size_t size)
{
}

static inline void kmemleak_alloc_phys(phys_addr_t phys, size_t size,
				       gfp_t gfp)
{
}

static inline void dump_stack(void)
{
}

#endif

```
