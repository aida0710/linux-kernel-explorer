---
sidebar_position: 18
---
# ioctl.c

### ファイル情報

- パス: `linux-v6.12/fs/jffs2/ioctl.c`

### コンテンツ

```c
/*
 * JFFS2 -- Journalling Flash File System, Version 2.
 *
 * Copyright © 2001-2007 Red Hat, Inc.
 * Copyright © 2004-2010 David Woodhouse <dwmw2@infradead.org>
 *
 * Created by David Woodhouse <dwmw2@infradead.org>
 *
 * For licensing information, see the file 'LICENCE' in this directory.
 *
 */

#include <linux/fs.h>
#include "nodelist.h"

long jffs2_ioctl(struct file *filp, unsigned int cmd, unsigned long arg)
{
	/* Later, this will provide for lsattr.jffs2 and chattr.jffs2, which
	   will include compression support etc. */
	return -ENOTTY;
}


```
