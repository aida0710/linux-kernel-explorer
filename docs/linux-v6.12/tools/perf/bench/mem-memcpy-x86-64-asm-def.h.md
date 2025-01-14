---
sidebar_position: 18
---
# mem-memcpy-x86-64-asm-def.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/bench/mem-memcpy-x86-64-asm-def.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

MEMCPY_FN(memcpy_orig,
	"x86-64-unrolled",
	"unrolled memcpy() in arch/x86/lib/memcpy_64.S")

MEMCPY_FN(__memcpy,
	"x86-64-movsq",
	"movsq-based memcpy() in arch/x86/lib/memcpy_64.S")

```
