---
sidebar_position: 148
---
# percpu.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/asm/percpu.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ___ASM_SPARC_PERCPU_H
#define ___ASM_SPARC_PERCPU_H
#if defined(__sparc__) && defined(__arch64__)
#include <asm/percpu_64.h>
#else
#include <asm/percpu_32.h>
#endif
#endif

```
