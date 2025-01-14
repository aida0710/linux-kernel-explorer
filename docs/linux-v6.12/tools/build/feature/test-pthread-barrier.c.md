---
sidebar_position: 66
---
# test-pthread-barrier.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-pthread-barrier.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdint.h>
#include <pthread.h>

int main(void)
{
	pthread_barrier_t barrier;

	pthread_barrier_init(&barrier, NULL, 1);
	pthread_barrier_wait(&barrier);
	return pthread_barrier_destroy(&barrier);
}

```
