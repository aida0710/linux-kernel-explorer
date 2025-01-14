---
sidebar_position: 25
---
# time.c

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/time.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (C) 2018 Hangzhou C-SKY Microsystems co.,ltd.

#include <linux/clocksource.h>
#include <linux/of_clk.h>

void __init time_init(void)
{
	of_clk_init(NULL);
	timer_probe();
}

```
