---
sidebar_position: 2
---
# arch_random.c

### ファイル情報

- パス: `linux-v6.12/arch/s390/crypto/arch_random.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * s390 arch random implementation.
 *
 * Copyright IBM Corp. 2017, 2020
 * Author(s): Harald Freudenberger
 */

#include <linux/kernel.h>
#include <linux/atomic.h>
#include <linux/random.h>
#include <linux/static_key.h>
#include <asm/archrandom.h>
#include <asm/cpacf.h>

DEFINE_STATIC_KEY_FALSE(s390_arch_random_available);

atomic64_t s390_arch_random_counter = ATOMIC64_INIT(0);
EXPORT_SYMBOL(s390_arch_random_counter);

```
