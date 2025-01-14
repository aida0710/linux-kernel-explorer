---
sidebar_position: 2
---
# data.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/vdso/data.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __S390_ASM_VDSO_DATA_H
#define __S390_ASM_VDSO_DATA_H

#include <linux/types.h>

struct arch_vdso_data {
	__s64 tod_steering_delta;
	__u64 tod_steering_end;
};

#endif /* __S390_ASM_VDSO_DATA_H */

```
