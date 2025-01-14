---
sidebar_position: 30
---
# head.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/kernel/head.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only

extern char __data_loc[];
extern char _edata_loc[];
extern char _sdata[];

int __init __inflate_kernel_data(void);

```
