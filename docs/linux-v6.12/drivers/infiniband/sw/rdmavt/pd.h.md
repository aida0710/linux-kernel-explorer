---
sidebar_position: 16
---
# pd.h

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/sw/rdmavt/pd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause */
/*
 * Copyright(c) 2016 Intel Corporation.
 */

#ifndef DEF_RDMAVTPD_H
#define DEF_RDMAVTPD_H

#include <rdma/rdma_vt.h>

int rvt_alloc_pd(struct ib_pd *pd, struct ib_udata *udata);
int rvt_dealloc_pd(struct ib_pd *ibpd, struct ib_udata *udata);

#endif          /* DEF_RDMAVTPD_H */

```
