---
sidebar_position: 68
---
# trace_selftest_dynamic.c

### ファイル情報

- パス: `linux-v6.12/kernel/trace/trace_selftest_dynamic.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/compiler.h>
#include "trace.h"

noinline __noclone int DYN_FTRACE_TEST_NAME(void)
{
	/* used to call mcount */
	return 0;
}

noinline __noclone int DYN_FTRACE_TEST_NAME2(void)
{
	/* used to call mcount */
	return 0;
}

```
