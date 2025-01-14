---
sidebar_position: 1335
---
# toshiba.h

### ファイル情報

- パス: `linux-v6.12/include/linux/toshiba.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/* toshiba.h -- Linux driver for accessing the SMM on Toshiba laptops 
 *
 * Copyright (c) 1996-2000  Jonathan A. Buzzard (jonathan@buzzard.org.uk)
 *
 * Thanks to Juergen Heinzl <juergen@monocerus.demon.co.uk> for the pointers
 * on making sure the structure is aligned and packed.
 */
#ifndef _LINUX_TOSHIBA_H
#define _LINUX_TOSHIBA_H

#include <uapi/linux/toshiba.h>

int tosh_smm(SMMRegisters *regs);
#endif

```
