---
sidebar_position: 1368
---
# uidgid_types.h

### ファイル情報

- パス: `linux-v6.12/include/linux/uidgid_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_UIDGID_TYPES_H
#define _LINUX_UIDGID_TYPES_H

#include <linux/types.h>

typedef struct {
	uid_t val;
} kuid_t;

typedef struct {
	gid_t val;
} kgid_t;

#endif /* _LINUX_UIDGID_TYPES_H */

```
