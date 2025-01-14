---
sidebar_position: 278
---
# string.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/include/asm/string.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef CONFIG_X86_32
# include <asm/string_32.h>
#else
# include <asm/string_64.h>
#endif

```
