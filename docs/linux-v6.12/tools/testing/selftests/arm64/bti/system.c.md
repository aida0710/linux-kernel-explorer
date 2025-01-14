---
sidebar_position: 9
---
# system.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/bti/system.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2019  Arm Limited
 * Original author: Dave Martin <Dave.Martin@arm.com>
 */

#include "system.h"

#include <asm/unistd.h>

void __noreturn exit(int n)
{
	syscall(__NR_exit, n);
	unreachable();
}

ssize_t write(int fd, const void *buf, size_t size)
{
	return syscall(__NR_write, fd, buf, size);
}

```
