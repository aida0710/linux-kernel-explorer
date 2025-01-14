---
sidebar_position: 12
---
# arcfb.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/arcfb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef __LINUX_ARCFB_H__
#define __LINUX_ARCFB_H__

#define FBIO_WAITEVENT		_IO('F', 0x88)
#define FBIO_GETCONTROL2	_IOR('F', 0x89, size_t)

#endif


```
