---
sidebar_position: 10
---
# bad_struct_ops2.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/bad_struct_ops2.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/bpf.h>
#include <bpf/bpf_helpers.h>

char _license[] SEC("license") = "GPL";

/* This is an unused struct_ops program, it lacks corresponding
 * struct_ops map, which provides attachment information.
 * W/o additional configuration attempt to load such
 * BPF object file would fail.
 */
SEC("struct_ops/foo")
void foo(void) {}

```
