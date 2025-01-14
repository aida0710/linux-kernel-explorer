---
sidebar_position: 4
---
# test_set8.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/tests/module_test/test_set8.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2023 Rivos Inc.
 */

.text
.global test_set8
test_set8:
	lw	a0, set8
	la	t0, set8
#ifdef CONFIG_32BIT
	slli	t0, t0, 24
	srli	t0, t0, 24
#else
	slli	t0, t0, 56
	srli	t0, t0, 56
#endif
	sub	a0, a0, t0
	ret
.data
set8:
	.reloc set8, R_RISCV_SET8, set8
	.word 0

```
