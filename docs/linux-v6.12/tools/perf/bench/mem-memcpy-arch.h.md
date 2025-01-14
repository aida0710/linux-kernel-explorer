---
sidebar_position: 17
---
# mem-memcpy-arch.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/bench/mem-memcpy-arch.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifdef HAVE_ARCH_X86_64_SUPPORT

#define MEMCPY_FN(fn, name, desc)		\
	void *fn(void *, const void *, size_t);

#include "mem-memcpy-x86-64-asm-def.h"

#undef MEMCPY_FN

#endif


```
