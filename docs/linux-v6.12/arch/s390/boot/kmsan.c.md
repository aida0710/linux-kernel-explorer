---
sidebar_position: 19
---
# kmsan.c

### ファイル情報

- パス: `linux-v6.12/arch/s390/boot/kmsan.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/kmsan-checks.h>

void kmsan_unpoison_memory(const void *address, size_t size)
{
}

```
