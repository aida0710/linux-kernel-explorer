---
sidebar_position: 90
---
# linkage.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/linkage.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_LINKAGE_H
#define __ASM_LINKAGE_H

#include <linux/stringify.h>

#define __ALIGN .balign CONFIG_FUNCTION_ALIGNMENT, 0x07
#define __ALIGN_STR __stringify(__ALIGN)

#endif

```
