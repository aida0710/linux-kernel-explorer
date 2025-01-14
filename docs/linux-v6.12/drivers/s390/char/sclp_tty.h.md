---
sidebar_position: 48
---
# sclp_tty.h

### ファイル情報

- パス: `linux-v6.12/drivers/s390/char/sclp_tty.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 *    interface to the SCLP-read/write driver
 *
 *  S390 version
 *    Copyright IBM Corp. 1999
 *    Author(s): Martin Peschke <mpeschke@de.ibm.com>
 *		 Martin Schwidefsky <schwidefsky@de.ibm.com>
 */

#ifndef __SCLP_TTY_H__
#define __SCLP_TTY_H__

#include <linux/tty_driver.h>

extern struct tty_driver *sclp_tty_driver;

#endif	/* __SCLP_TTY_H__ */

```
