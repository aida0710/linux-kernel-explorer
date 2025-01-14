---
sidebar_position: 8
---
# test_sub8.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/tests/module_test/test_sub8.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2023 Rivos Inc.
 */

.text
.global test_sub8
test_sub8:
	lb	a0, sub8
	addi	a0, a0, -32
	ret
first:
	.space 32
second:

.data
sub8:
	.reloc		sub8, R_RISCV_ADD8, second
	.reloc		sub8, R_RISCV_SUB8, first
	.byte		0

```
