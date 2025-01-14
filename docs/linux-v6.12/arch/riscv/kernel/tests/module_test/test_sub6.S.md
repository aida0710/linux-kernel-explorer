---
sidebar_position: 7
---
# test_sub6.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/tests/module_test/test_sub6.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2023 Rivos Inc.
 */

.text
.global test_sub6
test_sub6:
	lb	a0, sub6
	addi	a0, a0, -32
	ret
first:
	.space 32
second:

.data
sub6:
	.reloc		sub6, R_RISCV_SET6, second
	.reloc		sub6, R_RISCV_SUB6, first
	.byte		0

```
