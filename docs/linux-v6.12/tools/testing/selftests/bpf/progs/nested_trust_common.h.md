---
sidebar_position: 314
---
# nested_trust_common.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/nested_trust_common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (c) 2023 Meta Platforms, Inc. and affiliates. */

#ifndef _NESTED_TRUST_COMMON_H
#define _NESTED_TRUST_COMMON_H

#include <stdbool.h>

bool bpf_cpumask_test_cpu(unsigned int cpu, const struct cpumask *cpumask) __ksym;
__u32 bpf_cpumask_first_zero(const struct cpumask *cpumask) __ksym;

#endif /* _NESTED_TRUST_COMMON_H */

```
