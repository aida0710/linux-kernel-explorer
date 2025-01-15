---
sidebar_position: 149
---
# net_ratelimit.h

### ファイル情報

- パス: `include/net/net_ratelimit.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_NET_RATELIMIT_H
#define _LINUX_NET_RATELIMIT_H

#include <linux/ratelimit.h>

extern struct ratelimit_state net_ratelimit_state;

#endif	/* _LINUX_NET_RATELIMIT_H */

```
