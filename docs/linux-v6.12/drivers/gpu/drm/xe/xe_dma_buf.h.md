---
sidebar_position: 29
---
# xe_dma_buf.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_dma_buf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef _XE_DMA_BUF_H_
#define _XE_DMA_BUF_H_

#include <drm/drm_gem.h>

struct dma_buf *xe_gem_prime_export(struct drm_gem_object *obj, int flags);
struct drm_gem_object *xe_gem_prime_import(struct drm_device *dev,
					   struct dma_buf *dma_buf);

#endif

```
