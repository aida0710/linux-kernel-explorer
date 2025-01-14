---
sidebar_position: 1
---
# dm_op.h

### ファイル情報

- パス: `linux-v6.12/include/xen/interface/hvm/dm_op.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright (c) 2016, Citrix Systems Inc
 */

#ifndef __XEN_PUBLIC_HVM_DM_OP_H__
#define __XEN_PUBLIC_HVM_DM_OP_H__

struct xen_dm_op_buf {
	GUEST_HANDLE(void) h;
	xen_ulong_t size;
};
DEFINE_GUEST_HANDLE_STRUCT(xen_dm_op_buf);

#endif /* __XEN_PUBLIC_HVM_DM_OP_H__ */

```
