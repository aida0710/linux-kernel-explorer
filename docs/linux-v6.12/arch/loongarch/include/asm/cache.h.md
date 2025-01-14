---
sidebar_position: 18
---
# cache.h

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/include/asm/cache.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2020-2022 Loongson Technology Corporation Limited
 */
#ifndef _ASM_CACHE_H
#define _ASM_CACHE_H

#define L1_CACHE_SHIFT		CONFIG_L1_CACHE_SHIFT
#define L1_CACHE_BYTES		(1 << L1_CACHE_SHIFT)

#define __read_mostly __section(".data..read_mostly")

#endif /* _ASM_CACHE_H */

```
