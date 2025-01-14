---
sidebar_position: 156
---
# spram.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/spram.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _MIPS_SPRAM_H
#define _MIPS_SPRAM_H

#if defined(CONFIG_MIPS_SPRAM)
extern void spram_config(void);
#else
static inline void spram_config(void) { }
#endif /* CONFIG_MIPS_SPRAM */

#endif /* _MIPS_SPRAM_H */

```
