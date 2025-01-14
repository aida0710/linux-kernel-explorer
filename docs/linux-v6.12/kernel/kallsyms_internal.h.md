---
sidebar_position: 40
---
# kallsyms_internal.h

### ファイル情報

- パス: `linux-v6.12/kernel/kallsyms_internal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef LINUX_KALLSYMS_INTERNAL_H_
#define LINUX_KALLSYMS_INTERNAL_H_

#include <linux/types.h>

extern const int kallsyms_offsets[];
extern const u8 kallsyms_names[];

extern const unsigned int kallsyms_num_syms;
extern const unsigned long kallsyms_relative_base;

extern const char kallsyms_token_table[];
extern const u16 kallsyms_token_index[];

extern const unsigned int kallsyms_markers[];
extern const u8 kallsyms_seqs_of_names[];

#endif // LINUX_KALLSYMS_INTERNAL_H_

```
