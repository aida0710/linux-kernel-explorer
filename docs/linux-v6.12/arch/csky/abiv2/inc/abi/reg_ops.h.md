---
sidebar_position: 9
---
# reg_ops.h

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv2/inc/abi/reg_ops.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __ABI_REG_OPS_H
#define __ABI_REG_OPS_H
#include <asm/reg_ops.h>

static inline unsigned int mfcr_hint(void)
{
	return mfcr("cr31");
}

static inline unsigned int mfcr_ccr2(void)
{
	return mfcr("cr23");
}
#endif /* __ABI_REG_OPS_H */

```
