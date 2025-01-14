---
sidebar_position: 38
---
# test-libdw-dwarf-unwind.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libdw-dwarf-unwind.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <elfutils/libdwfl.h>

int main(void)
{
	/*
	 * This function is guarded via: __nonnull_attribute__ (1, 2).
	 * Passing '1' as arguments value. This code is never executed,
	 * only compiled.
	 */
	dwfl_thread_getframes((void *) 1, (void *) 1, NULL);
	return 0;
}

```
