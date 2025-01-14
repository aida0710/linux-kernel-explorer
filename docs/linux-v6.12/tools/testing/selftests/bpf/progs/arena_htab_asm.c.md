---
sidebar_position: 4
---
# arena_htab_asm.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/arena_htab_asm.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright (c) 2024 Meta Platforms, Inc. and affiliates. */
#define BPF_ARENA_FORCE_ASM
#define arena_htab_llvm arena_htab_asm
#include "arena_htab.c"

```
