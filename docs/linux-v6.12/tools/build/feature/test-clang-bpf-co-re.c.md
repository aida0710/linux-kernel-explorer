---
sidebar_position: 7
---
# test-clang-bpf-co-re.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-clang-bpf-co-re.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (c) 2020 Facebook

struct test {
	int a;
	int b;
} __attribute__((preserve_access_index));

volatile struct test global_value_for_test = {};

```
