---
sidebar_position: 3
---
# loader.lds.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/loader.lds.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */

#include <asm/page.h>
#include <asm/pgtable.h>

OUTPUT_ARCH(riscv)
ENTRY(_start)

SECTIONS
{
	. = KERNEL_LINK_ADDR;

	.payload : {
		*(.payload)
		. = ALIGN(8);
	}
}

```
