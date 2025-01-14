---
sidebar_position: 25
---
# altera_uart.h

### ファイル情報

- パス: `linux-v6.12/include/linux/altera_uart.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * altera_uart.h -- Altera UART driver defines.
 */

#ifndef	__ALTUART_H
#define	__ALTUART_H

struct altera_uart_platform_uart {
	unsigned long mapbase;	/* Physical address base */
	unsigned int irq;	/* Interrupt vector */
	unsigned int uartclk;	/* UART clock rate */
	unsigned int bus_shift;	/* Bus shift (address stride) */
};

#endif /* __ALTUART_H */

```
