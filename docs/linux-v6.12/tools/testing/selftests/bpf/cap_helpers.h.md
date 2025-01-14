---
sidebar_position: 18
---
# cap_helpers.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/cap_helpers.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __CAP_HELPERS_H
#define __CAP_HELPERS_H

#include <linux/types.h>
#include <linux/capability.h>

#ifndef CAP_PERFMON
#define CAP_PERFMON		38
#endif

#ifndef CAP_BPF
#define CAP_BPF			39
#endif

int cap_enable_effective(__u64 caps, __u64 *old_caps);
int cap_disable_effective(__u64 caps, __u64 *old_caps);

#endif

```
