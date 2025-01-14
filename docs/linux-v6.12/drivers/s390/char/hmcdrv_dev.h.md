---
sidebar_position: 13
---
# hmcdrv_dev.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/char/hmcdrv_dev.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 *    SE/HMC Drive FTP Device
 *
 *    Copyright IBM Corp. 2013
 *    Author(s): Ralf Hoppe (rhoppe@de.ibm.com)
 */

#ifndef __HMCDRV_DEV_H__
#define __HMCDRV_DEV_H__

int hmcdrv_dev_init(void);
void hmcdrv_dev_exit(void);

#endif	 /* __HMCDRV_DEV_H__ */

```
