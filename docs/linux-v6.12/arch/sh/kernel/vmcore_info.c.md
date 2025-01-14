---
sidebar_position: 52
---
# vmcore_info.c

### ファイル情報

- パス: `linux-v6.12/arch/sh/kernel/vmcore_info.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only

#include <linux/vmcore_info.h>
#include <linux/mm.h>

void arch_crash_save_vmcoreinfo(void)
{
#ifdef CONFIG_NUMA
	VMCOREINFO_SYMBOL(node_data);
	VMCOREINFO_LENGTH(node_data, MAX_NUMNODES);
#endif
#ifdef CONFIG_X2TLB
	VMCOREINFO_CONFIG(X2TLB);
#endif
}

```
