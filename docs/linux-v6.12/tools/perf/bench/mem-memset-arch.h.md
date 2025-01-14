---
sidebar_position: 20
---
# mem-memset-arch.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/bench/mem-memset-arch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifdef HAVE_ARCH_X86_64_SUPPORT

#define MEMSET_FN(fn, name, desc)		\
	void *fn(void *, int, size_t);

#include "mem-memset-x86-64-asm-def.h"

#undef MEMSET_FN

#endif


```
