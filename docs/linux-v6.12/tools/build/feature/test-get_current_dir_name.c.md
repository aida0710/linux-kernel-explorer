---
sidebar_position: 21
---
# test-get_current_dir_name.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-get_current_dir_name.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#define _GNU_SOURCE
#include <unistd.h>
#include <stdlib.h>

int main(void)
{
	free(get_current_dir_name());
	return 0;
}
#undef _GNU_SOURCE

```
