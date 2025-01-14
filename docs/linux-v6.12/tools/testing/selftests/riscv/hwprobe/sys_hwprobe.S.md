---
sidebar_position: 6
---
# sys_hwprobe.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/riscv/hwprobe/sys_hwprobe.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (C) 2023 Rivos, Inc */

.text
.global riscv_hwprobe
riscv_hwprobe:
	# Put __NR_riscv_hwprobe in the syscall number register, then just shim
	# back the kernel's return.  This doesn't do any sort of errno
	# handling, the caller can deal with it.
	li a7, 258
	ecall
	ret

```
