---
sidebar_position: 163
---
# vdso-symbols.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/vdso-symbols.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __S390_VDSO_SYMBOLS_H__
#define __S390_VDSO_SYMBOLS_H__

#include <generated/vdso64-offsets.h>
#ifdef CONFIG_COMPAT
#include <generated/vdso32-offsets.h>
#endif

#define VDSO64_SYMBOL(tsk, name) ((tsk)->mm->context.vdso_base + (vdso64_offset_##name))
#ifdef CONFIG_COMPAT
#define VDSO32_SYMBOL(tsk, name) ((tsk)->mm->context.vdso_base + (vdso32_offset_##name))
#else
#define VDSO32_SYMBOL(tsk, name) (-1UL)
#endif

#endif /* __S390_VDSO_SYMBOLS_H__ */

```
