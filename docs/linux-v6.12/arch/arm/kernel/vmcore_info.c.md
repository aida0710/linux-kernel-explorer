---
sidebar_position: 84
---
# vmcore_info.c

### ファイル情報

- パス: `linux-v6.12/arch/arm/kernel/vmcore_info.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only

#include <linux/vmcore_info.h>

void arch_crash_save_vmcoreinfo(void)
{
#ifdef CONFIG_ARM_LPAE
	VMCOREINFO_CONFIG(ARM_LPAE);
#endif
}

```
