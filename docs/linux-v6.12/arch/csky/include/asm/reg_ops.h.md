---
sidebar_position: 35
---
# reg_ops.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/include/asm/reg_ops.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ASM_REGS_OPS_H
#define __ASM_REGS_OPS_H

#define mfcr(reg)		\
({				\
	unsigned int tmp;	\
	asm volatile(		\
	"mfcr %0, "reg"\n"	\
	: "=r"(tmp)		\
	:			\
	: "memory");		\
	tmp;			\
})

#define mtcr(reg, val)		\
({				\
	asm volatile(		\
	"mtcr %0, "reg"\n"	\
	:			\
	: "r"(val)		\
	: "memory");		\
})

#endif /* __ASM_REGS_OPS_H */

```
