---
sidebar_position: 6
---
# efa_common_defs.h

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/efa/efa_common_defs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-2-Clause */
/*
 * Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All rights reserved.
 */

#ifndef _EFA_COMMON_H_
#define _EFA_COMMON_H_

#include <linux/bitfield.h>

#define EFA_COMMON_SPEC_VERSION_MAJOR        2
#define EFA_COMMON_SPEC_VERSION_MINOR        0

#define EFA_GET(ptr, mask) FIELD_GET(mask##_MASK, *(ptr))

#define EFA_SET(ptr, mask, value)                                              \
	({                                                                     \
		typeof(ptr) _ptr = ptr;                                        \
		*_ptr = (*_ptr & ~(mask##_MASK)) |                             \
			FIELD_PREP(mask##_MASK, value);                        \
	})

struct efa_common_mem_addr {
	u32 mem_addr_low;

	u32 mem_addr_high;
};

#endif /* _EFA_COMMON_H_ */

```
