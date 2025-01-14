---
sidebar_position: 9
---
# intel_pxp_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/pxp/intel_pxp_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __INTEL_PXP_DEBUGFS_H__
#define __INTEL_PXP_DEBUGFS_H__

struct intel_pxp;
struct dentry;

#ifdef CONFIG_DRM_I915_PXP
void intel_pxp_debugfs_register(struct intel_pxp *pxp);
#else
static inline void
intel_pxp_debugfs_register(struct intel_pxp *pxp)
{
}
#endif

#endif /* __INTEL_PXP_DEBUGFS_H__ */

```
