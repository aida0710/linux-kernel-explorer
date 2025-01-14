---
sidebar_position: 65
---
# test-pthread-attr-setaffinity-np.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-pthread-attr-setaffinity-np.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <stdint.h>
#include <pthread.h>
#include <sched.h>

int main(void)
{
	int ret = 0;
	pthread_attr_t thread_attr;
	cpu_set_t cs;

	pthread_attr_init(&thread_attr);
	CPU_ZERO(&cs);

	ret = pthread_attr_setaffinity_np(&thread_attr, sizeof(cs), &cs);

	return ret;
}

```
