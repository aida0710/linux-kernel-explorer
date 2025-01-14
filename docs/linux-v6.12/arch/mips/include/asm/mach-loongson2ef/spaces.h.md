---
sidebar_position: 6
---
# spaces.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/mach-loongson2ef/spaces.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_MACH_LOONGSON2EF_SPACES_H_
#define __ASM_MACH_LOONGSON2EF_SPACES_H_

#if defined(CONFIG_64BIT)
#define CAC_BASE        _AC(0x9800000000000000, UL)
#endif /* CONFIG_64BIT */

#include <asm/mach-generic/spaces.h>
#endif

```
