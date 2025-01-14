---
sidebar_position: 12
---
# i915_gem_dmabuf.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gem/i915_gem_dmabuf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2022 Intel Corporation
 */

#ifndef __I915_GEM_DMABUF_H__
#define __I915_GEM_DMABUF_H__

struct drm_gem_object;
struct drm_device;
struct dma_buf;

struct drm_gem_object *i915_gem_prime_import(struct drm_device *dev,
					     struct dma_buf *dma_buf);

struct dma_buf *i915_gem_prime_export(struct drm_gem_object *gem_obj, int flags);

#endif /* __I915_GEM_DMABUF_H__ */

```
