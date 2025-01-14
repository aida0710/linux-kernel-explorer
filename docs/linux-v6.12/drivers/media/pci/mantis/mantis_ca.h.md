---
sidebar_position: 7
---
# mantis_ca.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/mantis/mantis_ca.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
	Mantis PCI bridge driver

	Copyright (C) Manu Abraham (abraham.manu@gmail.com)

*/

#ifndef __MANTIS_CA_H
#define __MANTIS_CA_H

extern int mantis_ca_init(struct mantis_pci *mantis);
extern void mantis_ca_exit(struct mantis_pci *mantis);

#endif /* __MANTIS_CA_H */

```
