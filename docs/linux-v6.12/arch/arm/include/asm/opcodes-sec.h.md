---
sidebar_position: 96
---
# opcodes-sec.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/include/asm/opcodes-sec.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *
 * Copyright (C) 2012 ARM Limited
 */

#ifndef __ASM_ARM_OPCODES_SEC_H
#define __ASM_ARM_OPCODES_SEC_H

#include <asm/opcodes.h>

#define __SMC(imm4) __inst_arm_thumb32(					\
	0xE1600070 | (((imm4) & 0xF) << 0),				\
	0xF7F08000 | (((imm4) & 0xF) << 16)				\
)

#endif /* __ASM_ARM_OPCODES_SEC_H */

```
