---
sidebar_position: 13
---
# maccess.c

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/mm/maccess.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only

#include <linux/uaccess.h>
#include <linux/kernel.h>

#include <asm/disassemble.h>
#include <asm/inst.h>
#include <asm/ppc-opcode.h>

bool copy_from_kernel_nofault_allowed(const void *unsafe_src, size_t size)
{
	return is_kernel_addr((unsigned long)unsafe_src);
}

```
