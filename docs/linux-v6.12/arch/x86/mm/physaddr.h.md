---
sidebar_position: 38
---
# physaddr.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/mm/physaddr.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <asm/processor.h>

static inline int phys_addr_valid(resource_size_t addr)
{
#ifdef CONFIG_PHYS_ADDR_T_64BIT
	return !(addr >> boot_cpu_data.x86_phys_bits);
#else
	return 1;
#endif
}

```
