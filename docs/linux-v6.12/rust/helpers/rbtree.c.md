---
sidebar_position: 10
---
# rbtree.c

### ファイル情報

- パス: `linux-v6.12/rust/helpers/rbtree.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/rbtree.h>

void rust_helper_rb_link_node(struct rb_node *node, struct rb_node *parent,
			      struct rb_node **rb_link)
{
	rb_link_node(node, parent, rb_link);
}

```
