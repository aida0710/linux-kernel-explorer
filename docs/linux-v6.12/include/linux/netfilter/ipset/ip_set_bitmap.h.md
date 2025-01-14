---
sidebar_position: 2
---
# ip_set_bitmap.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter/ipset/ip_set_bitmap.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __IP_SET_BITMAP_H
#define __IP_SET_BITMAP_H

#include <uapi/linux/netfilter/ipset/ip_set_bitmap.h>

#define IPSET_BITMAP_MAX_RANGE	0x0000FFFF

enum {
	IPSET_ADD_STORE_PLAIN_TIMEOUT = -1,
	IPSET_ADD_FAILED = 1,
	IPSET_ADD_START_STORED_TIMEOUT,
};

#endif /* __IP_SET_BITMAP_H */

```
