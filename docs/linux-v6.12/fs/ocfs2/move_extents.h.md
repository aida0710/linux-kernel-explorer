---
sidebar_position: 42
---
# move_extents.h

### ファイル情報

- パス: `linux-v6.12/fs/ocfs2/move_extents.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * move_extents.h
 *
 * Copyright (C) 2011 Oracle.  All rights reserved.
 */
#ifndef OCFS2_MOVE_EXTENTS_H
#define OCFS2_MOVE_EXTENTS_H

int ocfs2_ioctl_move_extents(struct file *filp,  void __user *argp);

#endif /* OCFS2_MOVE_EXTENTS_H */

```
