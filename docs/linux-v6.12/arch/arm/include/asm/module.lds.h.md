---
sidebar_position: 91
---
# module.lds.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/module.lds.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef CONFIG_ARM_MODULE_PLTS
SECTIONS {
	.plt : { BYTE(0) }
	.init.plt : { BYTE(0) }
}
#endif

```
