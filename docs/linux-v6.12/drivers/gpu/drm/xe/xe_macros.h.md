---
sidebar_position: 186
---
# xe_macros.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_macros.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef _XE_MACROS_H_
#define _XE_MACROS_H_

#include <linux/bug.h>

#define XE_WARN_ON WARN_ON

#define XE_IOCTL_DBG(xe, cond) \
	((cond) && (drm_dbg(&(xe)->drm, \
			    "Ioctl argument check failed at %s:%d: %s", \
			    __FILE__, __LINE__, #cond), 1))

#endif

```
