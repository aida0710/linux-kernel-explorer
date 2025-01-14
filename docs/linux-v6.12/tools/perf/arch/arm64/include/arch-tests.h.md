---
sidebar_position: 1
---
# arch-tests.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/arm64/include/arch-tests.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ARCH_TESTS_H
#define ARCH_TESTS_H

struct test_suite;

int test__cpuid_match(struct test_suite *test, int subtest);
extern struct test_suite *arch_tests[];

#endif

```
