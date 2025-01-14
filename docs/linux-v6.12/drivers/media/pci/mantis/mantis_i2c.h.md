---
sidebar_position: 19
---
# mantis_i2c.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/mantis/mantis_i2c.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
	Mantis PCI bridge driver

	Copyright (C) Manu Abraham (abraham.manu@gmail.com)

*/

#ifndef __MANTIS_I2C_H
#define __MANTIS_I2C_H

#define I2C_STOP		(1 <<  0)
#define I2C_READ		(1 <<  1)

extern int mantis_i2c_init(struct mantis_pci *mantis);
extern int mantis_i2c_exit(struct mantis_pci *mantis);

#endif /* __MANTIS_I2C_H */

```
