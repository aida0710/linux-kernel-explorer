---
sidebar_position: 1
---
# execmem.c

### ファイル情報

- パス: `linux-v6.12/arch/sparc/mm/execmem.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/mm.h>
#include <linux/execmem.h>

static struct execmem_info execmem_info __ro_after_init;

struct execmem_info __init *execmem_arch_setup(void)
{
	execmem_info = (struct execmem_info){
		.ranges = {
			[EXECMEM_DEFAULT] = {
				.start	= MODULES_VADDR,
				.end	= MODULES_END,
				.pgprot	= PAGE_KERNEL,
				.alignment = 1,
			},
		},
	};

	return &execmem_info;
}

```
