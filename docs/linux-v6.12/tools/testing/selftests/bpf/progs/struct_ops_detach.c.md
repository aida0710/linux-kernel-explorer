---
sidebar_position: 392
---
# struct_ops_detach.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/struct_ops_detach.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2024 Meta Platforms, Inc. and affiliates. */
#include <vmlinux.h>
#include <bpf/bpf_helpers.h>
#include "../bpf_testmod/bpf_testmod.h"

char _license[] SEC("license") = "GPL";

SEC(".struct_ops.link")
struct bpf_testmod_ops testmod_do_detach;

```
