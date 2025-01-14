---
sidebar_position: 14
---
# sys.h

### ファイル情報

- パス: `linux-v6.12/fs/ocfs2/cluster/sys.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * sys.h
 *
 * Function prototypes for o2cb sysfs interface
 *
 * Copyright (C) 2005 Oracle.  All rights reserved.
 */

#ifndef O2CLUSTER_SYS_H
#define O2CLUSTER_SYS_H

void o2cb_sys_shutdown(void);
int o2cb_sys_init(void);

#endif /* O2CLUSTER_SYS_H */

```
