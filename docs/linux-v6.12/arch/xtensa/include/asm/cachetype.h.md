---
sidebar_position: 12
---
# cachetype.h

### ファイル情報

- パス: `linux-v6.12/arch/xtensa/include/asm/cachetype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_XTENSA_CACHETYPE_H
#define __ASM_XTENSA_CACHETYPE_H

#include <asm/cache.h>
#include <asm/page.h>

#define cpu_dcache_is_aliasing()	(DCACHE_WAY_SIZE > PAGE_SIZE)

#endif

```
