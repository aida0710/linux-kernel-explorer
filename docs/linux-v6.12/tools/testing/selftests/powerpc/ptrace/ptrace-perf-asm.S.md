---
sidebar_position: 10
---
# ptrace-perf-asm.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/ptrace/ptrace-perf-asm.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0-or-later */

#include <ppc-asm.h>

.global same_watch_addr_load
.global same_watch_addr_trap

FUNC_START(same_watch_addr_child)
	nop
same_watch_addr_load:
	ld 0,0(3)
	nop
same_watch_addr_trap:
	trap
	blr
FUNC_END(same_watch_addr_child)


.global perf_then_ptrace_load1
.global perf_then_ptrace_load2
.global perf_then_ptrace_trap

FUNC_START(perf_then_ptrace_child)
	nop
perf_then_ptrace_load1:
	ld 0,0(3)
perf_then_ptrace_load2:
	ld 0,0(4)
	nop
perf_then_ptrace_trap:
	trap
	blr
FUNC_END(perf_then_ptrace_child)

```
