---
sidebar_position: 1
---
# instructions.c

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/arc/annotate/instructions.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/compiler.h>

static int arc__annotate_init(struct arch *arch, char *cpuid __maybe_unused)
{
	arch->initialized = true;
	arch->objdump.comment_char = ';';
	return 0;
}

```
