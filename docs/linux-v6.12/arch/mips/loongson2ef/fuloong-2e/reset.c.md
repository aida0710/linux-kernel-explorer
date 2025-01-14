---
sidebar_position: 4
---
# reset.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson2ef/fuloong-2e/reset.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/* Board-specific reboot/shutdown routines
 * Copyright (c) 2009 Philippe Vachon <philippe@cowpig.ca>
 *
 * Copyright (C) 2009 Lemote Inc.
 * Author: Wu Zhangjin, wuzhangjin@gmail.com
 */

#include <loongson.h>

void mach_prepare_reboot(void)
{
	LOONGSON_GENCFG &= ~(1 << 2);
	LOONGSON_GENCFG |= (1 << 2);
}

void mach_prepare_shutdown(void)
{
}

```
