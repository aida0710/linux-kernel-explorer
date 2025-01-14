---
sidebar_position: 68
---
# xterm.h

### ファイル情報

- パス: `linux-v6.12/arch/um/drivers/xterm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* 
 * Copyright (C) 2002 Jeff Dike (jdike@karaya.com)
 */

#ifndef __XTERM_H__
#define __XTERM_H__

extern int xterm_fd(int socket, int *pid_out);

#endif


```
