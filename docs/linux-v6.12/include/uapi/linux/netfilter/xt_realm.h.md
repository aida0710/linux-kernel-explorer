---
sidebar_position: 67
---
# xt_realm.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/netfilter/xt_realm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _XT_REALM_H
#define _XT_REALM_H

#include <linux/types.h>

struct xt_realm_info {
	__u32 id;
	__u32 mask;
	__u8 invert;
};

#endif /* _XT_REALM_H */

```
