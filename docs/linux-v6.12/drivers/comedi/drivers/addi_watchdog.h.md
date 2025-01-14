---
sidebar_position: 15
---
# addi_watchdog.h

### ファイル情報

- パス: `linux-v6.12/drivers/comedi/drivers/addi_watchdog.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _ADDI_WATCHDOG_H
#define _ADDI_WATCHDOG_H

struct comedi_subdevice;

void addi_watchdog_reset(unsigned long iobase);
int addi_watchdog_init(struct comedi_subdevice *s, unsigned long iobase);

#endif

```
