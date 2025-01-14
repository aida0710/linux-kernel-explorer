---
sidebar_position: 596
---
# test_sockhash_kern.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_sockhash_kern.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (c) 2018 Covalent IO, Inc. http://covalent.io
#undef SOCKMAP
#define TEST_MAP_TYPE BPF_MAP_TYPE_SOCKHASH
#include "./test_sockmap_kern.h"

```
