---
sidebar_position: 4
---
# loader.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/loader.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */

	.align 4
	.section .payload, "ax", %progbits
	.globl _start
_start:
	.incbin "arch/riscv/boot/Image"


```
