---
sidebar_position: 1
---
# slab.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/memblock/lib/slab.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/slab.h>

enum slab_state slab_state;

bool slab_is_available(void)
{
	return slab_state >= UP;
}

```
