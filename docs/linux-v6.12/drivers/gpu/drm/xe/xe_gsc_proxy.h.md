---
sidebar_position: 56
---
# xe_gsc_proxy.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_gsc_proxy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023 Intel Corporation
 */

#ifndef _XE_GSC_PROXY_H_
#define _XE_GSC_PROXY_H_

#include <linux/types.h>

struct xe_gsc;

int xe_gsc_proxy_init(struct xe_gsc *gsc);
bool xe_gsc_proxy_init_done(struct xe_gsc *gsc);
void xe_gsc_proxy_remove(struct xe_gsc *gsc);
int xe_gsc_proxy_start(struct xe_gsc *gsc);

int xe_gsc_proxy_request_handler(struct xe_gsc *gsc);
void xe_gsc_proxy_irq_handler(struct xe_gsc *gsc, u32 iir);

#endif

```
