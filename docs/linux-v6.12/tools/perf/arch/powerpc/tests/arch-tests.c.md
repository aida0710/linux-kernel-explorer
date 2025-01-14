---
sidebar_position: 1
---
# arch-tests.c

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/powerpc/tests/arch-tests.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <string.h>
#include "tests/tests.h"
#include "arch-tests.h"


struct test_suite *arch_tests[] = {
#ifdef HAVE_DWARF_UNWIND_SUPPORT
	&suite__dwarf_unwind,
#endif
	NULL,
};

```
