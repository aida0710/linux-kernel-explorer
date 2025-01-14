---
sidebar_position: 73
---
# test-timerfd.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-timerfd.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * test for timerfd functions used by perf-kvm-stat-live
 */
#include <sys/timerfd.h>

int main(void)
{
	struct itimerspec new_value;

	int fd = timerfd_create(CLOCK_MONOTONIC, TFD_NONBLOCK);
	if (fd < 0)
		return 1;

	if (timerfd_settime(fd, 0, &new_value, NULL) != 0)
		return 1;

	return 0;
}

```
