---
sidebar_position: 80
---
# krait-l2-accessors.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/krait-l2-accessors.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASMARM_KRAIT_L2_ACCESSORS_H
#define __ASMARM_KRAIT_L2_ACCESSORS_H

extern void krait_set_l2_indirect_reg(u32 addr, u32 val);
extern u32 krait_get_l2_indirect_reg(u32 addr);

#endif

```
