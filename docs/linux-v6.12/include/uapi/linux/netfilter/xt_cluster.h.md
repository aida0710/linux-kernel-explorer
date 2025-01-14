---
sidebar_position: 27
---
# xt_cluster.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/netfilter/xt_cluster.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _XT_CLUSTER_MATCH_H
#define _XT_CLUSTER_MATCH_H

#include <linux/types.h>

enum xt_cluster_flags {
	XT_CLUSTER_F_INV	= (1 << 0)
};

struct xt_cluster_match_info {
	__u32 total_nodes;
	__u32 node_mask;
	__u32 hash_seed;
	__u32 flags;
};

#define XT_CLUSTER_NODES_MAX	32

#endif /* _XT_CLUSTER_MATCH_H */

```
