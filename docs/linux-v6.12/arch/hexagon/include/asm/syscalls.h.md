---
sidebar_position: 39
---
# syscalls.h

### ファイル情報

- パス: `linux-v6.12/arch/hexagon/include/asm/syscalls.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#include <asm-generic/syscalls.h>

asmlinkage long sys_hexagon_fadvise64_64(int fd, int advice,
	                                  u32 a2, u32 a3, u32 a4, u32 a5);

```
