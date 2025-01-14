---
sidebar_position: 11
---
# cache.h

### ファイル情報

- パス: `linux-v6.12/tools/include/linux/cache.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _TOOLS_LINUX_CACHE_H
#define _TOOLS_LINUX_CACHE_H

#define L1_CACHE_SHIFT		5
#define L1_CACHE_BYTES		(1 << L1_CACHE_SHIFT)

#define SMP_CACHE_BYTES L1_CACHE_BYTES

#endif

```
