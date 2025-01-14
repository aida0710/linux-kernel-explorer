---
sidebar_position: 49
---
# vermagic.h

### ファイル情報

- パス: `linux-v6.12/arch/hexagon/include/asm/vermagic.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2010-2011, The Linux Foundation. All rights reserved.
 */

#ifndef _ASM_VERMAGIC_H
#define _ASM_VERMAGIC_H

#include <linux/stringify.h>

#define MODULE_ARCH_VERMAGIC __stringify(PROCESSOR_MODEL_NAME) " "

#endif /* _ASM_VERMAGIC_H */

```
