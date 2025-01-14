---
sidebar_position: 27
---
# cachetype.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/cachetype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_MIPS_CACHETYPE_H
#define __ASM_MIPS_CACHETYPE_H

#include <asm/cpu-features.h>

#define cpu_dcache_is_aliasing()	cpu_has_dc_aliases

#endif

```
