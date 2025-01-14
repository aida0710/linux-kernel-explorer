---
sidebar_position: 93
---
# runtime-const.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/runtime-const.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ASM_RUNTIME_CONST_H
#define _ASM_RUNTIME_CONST_H

/*
 * This is the fallback for when the architecture doesn't
 * support the runtime const operations.
 *
 * We just use the actual symbols as-is.
 */
#define runtime_const_ptr(sym) (sym)
#define runtime_const_shift_right_32(val, sym) ((u32)(val)>>(sym))
#define runtime_const_init(type,sym) do { } while (0)

#endif

```
