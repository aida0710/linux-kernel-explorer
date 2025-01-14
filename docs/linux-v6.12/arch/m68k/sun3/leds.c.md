---
sidebar_position: 5
---
# leds.c

### ファイル情報

- パス: `linux-v6.12/arch/m68k/sun3/leds.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <asm/contregs.h>
#include <asm/sun3mmu.h>
#include <asm/io.h>

#include "sun3.h"

void sun3_leds(unsigned char byte)
{
	unsigned char dfc;

	GET_DFC(dfc);
	SET_DFC(FC_CONTROL);
	SET_CONTROL_BYTE(AC_LEDS, byte);
	SET_DFC(dfc);
}

```
