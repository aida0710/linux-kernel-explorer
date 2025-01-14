---
sidebar_position: 8
---
# fp-ptrace.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/fp/fp-ptrace.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2021-3 ARM Limited.

#ifndef FP_PTRACE_H
#define FP_PTRACE_H

#define SVCR_SM_SHIFT 0
#define SVCR_ZA_SHIFT 1

#define SVCR_SM (1 << SVCR_SM_SHIFT)
#define SVCR_ZA (1 << SVCR_ZA_SHIFT)

#endif

```
