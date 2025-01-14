---
sidebar_position: 40
---
# pc-conf-reg.c

### ファイル情報

- パス: `linux-v6.12/arch/x86/lib/pc-conf-reg.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Support for the configuration register space at port I/O locations
 * 0x22 and 0x23 variously used by PC architectures, e.g. the MP Spec,
 * Cyrix CPUs, numerous chipsets.  As the space is indirectly addressed
 * it may have to be protected with a spinlock, depending on the context.
 */

#include <linux/spinlock.h>

#include <asm/pc-conf-reg.h>

DEFINE_RAW_SPINLOCK(pc_conf_lock);

```
