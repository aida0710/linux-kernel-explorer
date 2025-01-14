---
sidebar_position: 76
---
# pcspeaker.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/kernel/pcspeaker.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/platform_device.h>
#include <linux/err.h>
#include <linux/init.h>

static __init int add_pcspkr(void)
{
	struct platform_device *pd;

	pd = platform_device_register_simple("pcspkr", -1, NULL, 0);

	return PTR_ERR_OR_ZERO(pd);
}
device_initcall(add_pcspkr);

```
