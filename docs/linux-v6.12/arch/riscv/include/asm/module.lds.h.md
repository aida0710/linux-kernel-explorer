---
sidebar_position: 84
---
# module.lds.h

### ファイル情報

- パス: `linux-v6.12/arch/riscv/include/asm/module.lds.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (C) 2017 Andes Technology Corporation */
#ifdef CONFIG_MODULE_SECTIONS
SECTIONS {
	.plt : { BYTE(0) }
	.got : { BYTE(0) }
	.got.plt : { BYTE(0) }
}
#endif

```
