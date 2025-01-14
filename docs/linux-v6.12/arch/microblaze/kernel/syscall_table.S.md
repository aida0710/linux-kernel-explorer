---
sidebar_position: 23
---
# syscall_table.S

### ファイル情報

- パス: `linux-v6.12/arch/microblaze/kernel/syscall_table.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */

#define __SYSCALL(nr, entry) .long entry
ENTRY(sys_call_table)
#include <asm/syscall_table.h>

```
