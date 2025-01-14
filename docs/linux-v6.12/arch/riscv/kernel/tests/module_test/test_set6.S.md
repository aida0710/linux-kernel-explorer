---
sidebar_position: 3
---
# test_set6.S

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/tests/module_test/test_set6.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2023 Rivos Inc.
 */

.text
.global test_set6
test_set6:
	lw	a0, set6
	la	t0, set6
#ifdef CONFIG_32BIT
	slli	t0, t0, 26
	srli	t0, t0, 26
#else
	slli	t0, t0, 58
	srli	t0, t0, 58
#endif
	sub	a0, a0, t0
	ret
.data
set6:
	.reloc set6, R_RISCV_SET6, set6
	.word 0

```
