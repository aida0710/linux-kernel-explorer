---
sidebar_position: 155
---
# ucall.S

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/ucall.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Generic code to perform an ultravisor call.
 *
 * Copyright 2019, IBM Corporation.
 *
 */
#include <linux/export.h>
#include <asm/ppc_asm.h>

_GLOBAL(ucall_norets)
EXPORT_SYMBOL_GPL(ucall_norets)
	sc	2	/* Invoke the ultravisor */
	blr		/* Return r3 = status */

```
