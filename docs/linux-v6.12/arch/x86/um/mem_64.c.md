---
sidebar_position: 9
---
# mem_64.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/um/mem_64.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/mm.h>
#include <asm/elf.h>

const char *arch_vma_name(struct vm_area_struct *vma)
{
	if (vma->vm_mm && vma->vm_start == um_vdso_addr)
		return "[vdso]";

	return NULL;
}

```
