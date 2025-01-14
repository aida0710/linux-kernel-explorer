---
sidebar_position: 20
---
# setup.c

### ファイル情報

- パス: `linux-v6.12/arch/m68k/kernel/setup.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#ifdef CONFIG_MMU
#include "setup_mm.c"
#else
#include "setup_no.c"
#endif

#if IS_ENABLED(CONFIG_INPUT_M68K_BEEP)
void (*mach_beep)(unsigned int, unsigned int);
EXPORT_SYMBOL(mach_beep);
#endif

```
