---
sidebar_position: 25
---
# current.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/current.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __ASM_GENERIC_CURRENT_H
#define __ASM_GENERIC_CURRENT_H

#ifndef __ASSEMBLY__
#include <linux/thread_info.h>

#define get_current() (current_thread_info()->task)
#define current get_current()
#endif

#endif /* __ASM_GENERIC_CURRENT_H */

```
