---
sidebar_position: 11
---
# misc.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/boot/compressed/misc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef MISC_H
#define MISC_H

void arch_ftrace_ops_list_func(void);
void decompress_kernel(void);
void ftrace_stub(void);

#endif /* MISC_H */

```
