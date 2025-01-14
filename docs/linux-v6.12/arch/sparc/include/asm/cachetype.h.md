---
sidebar_position: 30
---
# cachetype.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/cachetype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_SPARC_CACHETYPE_H
#define __ASM_SPARC_CACHETYPE_H

#include <asm/page.h>

#ifdef CONFIG_SPARC32
extern int vac_cache_size;
#define cpu_dcache_is_aliasing()	(vac_cache_size > PAGE_SIZE)
#else
#define cpu_dcache_is_aliasing()	(L1DCACHE_SIZE > PAGE_SIZE)
#endif

#endif

```
