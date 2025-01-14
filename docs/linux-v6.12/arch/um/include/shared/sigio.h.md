---
sidebar_position: 19
---
# sigio.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/shared/sigio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* 
 * Copyright (C) 2002 Jeff Dike (jdike@karaya.com)
 */

#ifndef __SIGIO_H__
#define __SIGIO_H__

extern int write_sigio_irq(int fd);
extern void sigio_lock(void);
extern void sigio_unlock(void);

#endif

```
