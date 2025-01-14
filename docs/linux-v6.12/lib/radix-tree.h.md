---
sidebar_position: 194
---
# radix-tree.h

### ファイル情報

- パス: `linux-v6.12/lib/radix-tree.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0+
/* radix-tree helpers that are only shared with xarray */

struct kmem_cache;
struct rcu_head;

extern struct kmem_cache *radix_tree_node_cachep;
extern void radix_tree_node_rcu_free(struct rcu_head *head);

```
