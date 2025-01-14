---
sidebar_position: 33
---
# xt_CONNSECMARK.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/netfilter/xt_CONNSECMARK.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _XT_CONNSECMARK_H_target
#define _XT_CONNSECMARK_H_target

#include <linux/types.h>

enum {
	CONNSECMARK_SAVE = 1,
	CONNSECMARK_RESTORE,
};

struct xt_connsecmark_target_info {
	__u8 mode;
};

#endif /*_XT_CONNSECMARK_H_target */

```
