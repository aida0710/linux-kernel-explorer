---
sidebar_position: 1
---
# board.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson32/ls1c/board.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2016 Yang Ling <gnaygnil@gmail.com>
 */

#include <platform.h>

static struct platform_device *ls1c_platform_devices[] __initdata = {
	&ls1x_uart_pdev,
	&ls1x_eth0_pdev,
	&ls1x_rtc_pdev,
	&ls1x_wdt_pdev,
};

static int __init ls1c_platform_init(void)
{
	ls1x_serial_set_uartclk(&ls1x_uart_pdev);

	return platform_add_devices(ls1c_platform_devices,
				   ARRAY_SIZE(ls1c_platform_devices));
}

arch_initcall(ls1c_platform_init);

```
