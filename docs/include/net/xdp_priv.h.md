---
sidebar_position: 217
---
# xdp_priv.h

### ファイル情報

- パス: `include/net/xdp_priv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __LINUX_NET_XDP_PRIV_H__
#define __LINUX_NET_XDP_PRIV_H__

#include <linux/rhashtable.h>
#include <net/xdp.h>

/* Private to net/core/xdp.c, but used by trace/events/xdp.h */
struct xdp_mem_allocator {
	struct xdp_mem_info mem;
	union {
		void *allocator;
		struct page_pool *page_pool;
	};
	struct rhash_head node;
	struct rcu_head rcu;
};

#endif /* __LINUX_NET_XDP_PRIV_H__ */

```
