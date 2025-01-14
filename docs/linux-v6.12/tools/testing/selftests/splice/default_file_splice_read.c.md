---
sidebar_position: 3
---
# default_file_splice_read.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/splice/default_file_splice_read.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#define _GNU_SOURCE
#include <fcntl.h>

int main(int argc, char **argv)
{
        splice(0, 0, 1, 0, 1<<30, 0);
	return 0;
}

```
