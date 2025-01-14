---
sidebar_position: 36
---
# 8250_pcilib.h

### ファイル情報

- パス: `linux-v6.12/drivers/tty/serial/8250/8250_pcilib.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * 8250 PCI library header file.
 *
 * Copyright (C) 2001 Russell King, All Rights Reserved.
 */

#include <linux/types.h>

struct pci_dev;

struct uart_8250_port;

int serial8250_pci_setup_port(struct pci_dev *dev, struct uart_8250_port *port, u8 bar,
		   unsigned int offset, int regshift);

```
