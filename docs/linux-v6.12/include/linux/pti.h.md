---
sidebar_position: 1038
---
# pti.h

### ファイル情報

- パス: `linux-v6.12/include/linux/pti.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0
#ifndef _INCLUDE_PTI_H
#define _INCLUDE_PTI_H

#ifdef CONFIG_MITIGATION_PAGE_TABLE_ISOLATION
#include <asm/pti.h>
#else
static inline void pti_init(void) { }
static inline void pti_finalize(void) { }
#endif

#endif

```
