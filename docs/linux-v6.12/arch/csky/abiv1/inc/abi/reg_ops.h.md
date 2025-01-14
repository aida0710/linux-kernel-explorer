---
sidebar_position: 8
---
# reg_ops.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv1/inc/abi/reg_ops.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ABI_REG_OPS_H
#define __ABI_REG_OPS_H
#include <asm/reg_ops.h>

#define cprcr(reg)					\
({							\
	unsigned int tmp;				\
	asm volatile("cprcr %0, "reg"\n":"=b"(tmp));	\
	tmp;						\
})

#define cpwcr(reg, val)					\
({							\
	asm volatile("cpwcr %0, "reg"\n"::"b"(val));	\
})

static inline unsigned int mfcr_hint(void)
{
	return mfcr("cr30");
}

static inline unsigned int mfcr_ccr2(void) { return 0; }

#endif /* __ABI_REG_OPS_H */

```
