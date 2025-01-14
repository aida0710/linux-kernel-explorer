---
sidebar_position: 26
---
# xt_CLASSIFY.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/netfilter/xt_CLASSIFY.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _XT_CLASSIFY_H
#define _XT_CLASSIFY_H

#include <linux/types.h>

struct xt_classify_target_info {
	__u32 priority;
};

#endif /*_XT_CLASSIFY_H */

```
