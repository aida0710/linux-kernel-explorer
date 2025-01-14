---
sidebar_position: 3
---
# initrd.S

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/bootp/initrd.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
	.type	initrd_start,#object
	.globl	initrd_start
initrd_start:
	.incbin	INITRD
	.globl	initrd_end
initrd_end:

```
