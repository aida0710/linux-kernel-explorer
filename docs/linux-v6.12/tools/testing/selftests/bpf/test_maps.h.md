---
sidebar_position: 82
---
# test_maps.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/test_maps.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _TEST_MAPS_H
#define _TEST_MAPS_H

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define CHECK(condition, tag, format...) ({				\
	int __ret = !!(condition);					\
	if (__ret) {							\
		printf("%s(%d):FAIL:%s ", __func__, __LINE__, tag);	\
		printf(format);						\
		exit(-1);						\
	}								\
})

extern int skips;

typedef bool (*retry_for_error_fn)(int err);
int map_update_retriable(int map_fd, const void *key, const void *value, int flags, int attempts,
			 retry_for_error_fn need_retry);

#endif

```
