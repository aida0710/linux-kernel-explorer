---
sidebar_position: 17
---
# uart-prom.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/compressed/uart-prom.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <asm/setup.h>

#include "decompress.h"

void putc(char c)
{
	prom_putchar(c);
}

```
