---
sidebar_position: 5
---
# cachetype.h

### ファイル情報

- パス: `linux-v6.12/arch/nios2/include/asm/cachetype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_NIOS2_CACHETYPE_H
#define __ASM_NIOS2_CACHETYPE_H

#include <asm/page.h>
#include <asm/cache.h>

#define cpu_dcache_is_aliasing()	(NIOS2_DCACHE_SIZE > PAGE_SIZE)

#endif

```
