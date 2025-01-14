---
sidebar_position: 4
---
# cachectl.h

### ファイル情報

- パス: `linux-v6.12/arch/parisc/include/uapi/asm/cachectl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _ASM_CACHECTL
#define _ASM_CACHECTL

/*
 * Options for cacheflush system call
 */
#define ICACHE	(1<<0)		/* flush instruction cache	  */
#define DCACHE	(1<<1)		/* writeback and flush data cache */
#define BCACHE	(ICACHE|DCACHE) /* flush both caches		  */

#endif	/* _ASM_CACHECTL */

```
