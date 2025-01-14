---
sidebar_position: 26
---
# piggy.S

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/compressed/piggy.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
	.section .piggydata, "a"
	.globl	input_data
input_data:
	.incbin	"arch/arm/boot/compressed/piggy_data"
	.globl	input_data_end
input_data_end:

```
