---
sidebar_position: 4
---
# cpuflags.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/boot/compressed/cpuflags.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include "../cpuflags.c"

bool has_cpuflag(int flag)
{
	get_cpuflags();

	return test_bit(flag, cpu.flags);
}

```
