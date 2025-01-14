---
sidebar_position: 4
---
# kernel.S

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/bootp/kernel.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
	.globl	kernel_start
kernel_start:
	.incbin	"arch/arm/boot/zImage"
	.globl	kernel_end
kernel_end:
	.align	2

```
