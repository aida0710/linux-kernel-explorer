---
sidebar_position: 112
---
# unpriv_helpers.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/unpriv_helpers.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only

#include <stdbool.h>

#define UNPRIV_SYSCTL "kernel/unprivileged_bpf_disabled"

bool get_unpriv_disabled(void);

```
