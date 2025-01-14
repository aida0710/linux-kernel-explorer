---
sidebar_position: 2
---
# diag318_test_handler.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/kvm/include/s390x/diag318_test_handler.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later
 *
 * Test handler for the s390x DIAGNOSE 0x0318 instruction.
 *
 * Copyright (C) 2020, IBM
 */

#ifndef SELFTEST_KVM_DIAG318_TEST_HANDLER
#define SELFTEST_KVM_DIAG318_TEST_HANDLER

uint64_t get_diag318_info(void);

#endif

```
