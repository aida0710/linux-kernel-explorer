---
sidebar_position: 8
---
# emif-asm-offsets.c

### ファイル情報

- パス: `linux-v6.12/drivers/memory/emif-asm-offsets.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * TI AM33XX EMIF PM Assembly Offsets
 *
 * Copyright (C) 2016-2017 Texas Instruments Inc.
 */
#include <linux/ti-emif-sram.h>

int main(void)
{
	ti_emif_asm_offsets();

	return 0;
}

```
