---
sidebar_position: 5
---
# cacheflush.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/asm/cacheflush.h`

### コンテンツ

```h
#ifndef __UM_ASM_CACHEFLUSH_H
#define __UM_ASM_CACHEFLUSH_H

#include <asm/tlbflush.h>
#define flush_cache_vmap flush_tlb_kernel_range
#define flush_cache_vunmap flush_tlb_kernel_range

#include <asm-generic/cacheflush.h>
#endif /* __UM_ASM_CACHEFLUSH_H */

```
