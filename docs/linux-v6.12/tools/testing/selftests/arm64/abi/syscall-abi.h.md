---
sidebar_position: 7
---
# syscall-abi.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/abi/syscall-abi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2021 ARM Limited.
 */

#ifndef SYSCALL_ABI_H
#define SYSCALL_ABI_H

#define SVCR_ZA_MASK		2
#define SVCR_SM_MASK		1

#define SVCR_ZA_SHIFT		1
#define SVCR_SM_SHIFT		0

#endif

```
