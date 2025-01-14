---
sidebar_position: 2
---
# ip30-console.c

### ファイル情報

- パス: `linux-v6.12/arch/mips/sgi-ip30/ip30-console.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/io.h>
#include <linux/processor.h>

#include <asm/sn/ioc3.h>
#include <asm/setup.h>

static inline struct ioc3_uartregs *console_uart(void)
{
	struct ioc3 *ioc3;

	ioc3 = (struct ioc3 *)((void *)(0x900000001f600000));
	return &ioc3->sregs.uarta;
}

void prom_putchar(char c)
{
	struct ioc3_uartregs *uart = console_uart();

	while ((readb(&uart->iu_lsr) & 0x20) == 0)
		cpu_relax();

	writeb(c, &uart->iu_thr);
}

```
