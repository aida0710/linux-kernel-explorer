---
sidebar_position: 1
---
# moxtet.h

### ファイル情報

- パス: `linux-v6.12/include/dt-bindings/bus/moxtet.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Constant for device tree bindings for Turris Mox module configuration bus
 *
 * Copyright (C) 2019 Marek Behún <kabel@kernel.org>
 */

#ifndef _DT_BINDINGS_BUS_MOXTET_H
#define _DT_BINDINGS_BUS_MOXTET_H

#define MOXTET_IRQ_PCI		0
#define MOXTET_IRQ_USB3		4
#define MOXTET_IRQ_PERIDOT(n)	(8 + (n))
#define MOXTET_IRQ_TOPAZ	12

#endif /* _DT_BINDINGS_BUS_MOXTET_H */

```
