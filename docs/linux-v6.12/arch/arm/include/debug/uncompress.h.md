---
sidebar_position: 26
---
# uncompress.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/debug/uncompress.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef CONFIG_DEBUG_UNCOMPRESS
extern void putc(int c);
#else
static inline void putc(int c) {}
#endif
static inline void flush(void) {}
static inline void arch_decomp_setup(void) {}

```
