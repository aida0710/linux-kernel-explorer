---
sidebar_position: 51
---
# test-libtracefs.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libtracefs.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <tracefs.h>

int main(void)
{
	struct tracefs_instance *inst = tracefs_instance_create("dummy");

	tracefs_instance_destroy(inst);
	return 0;
}

```
