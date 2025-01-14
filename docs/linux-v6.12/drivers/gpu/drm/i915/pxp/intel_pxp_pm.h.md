---
sidebar_position: 17
---
# intel_pxp_pm.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/pxp/intel_pxp_pm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright(c) 2020, Intel Corporation. All rights reserved.
 */

#ifndef __INTEL_PXP_PM_H__
#define __INTEL_PXP_PM_H__

struct intel_pxp;

#ifdef CONFIG_DRM_I915_PXP
void intel_pxp_suspend_prepare(struct intel_pxp *pxp);
void intel_pxp_suspend(struct intel_pxp *pxp);
void intel_pxp_resume_complete(struct intel_pxp *pxp);
void intel_pxp_runtime_suspend(struct intel_pxp *pxp);
void intel_pxp_runtime_resume(struct intel_pxp *pxp);
#else
static inline void intel_pxp_suspend_prepare(struct intel_pxp *pxp)
{
}

static inline void intel_pxp_suspend(struct intel_pxp *pxp)
{
}

static inline void intel_pxp_resume_complete(struct intel_pxp *pxp)
{
}

static inline void intel_pxp_runtime_suspend(struct intel_pxp *pxp)
{
}

static inline void intel_pxp_runtime_resume(struct intel_pxp *pxp)
{
}
#endif
#endif /* __INTEL_PXP_PM_H__ */

```
