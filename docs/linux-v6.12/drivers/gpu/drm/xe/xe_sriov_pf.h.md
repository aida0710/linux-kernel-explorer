---
sidebar_position: 252
---
# xe_sriov_pf.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_sriov_pf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023-2024 Intel Corporation
 */

#ifndef _XE_SRIOV_PF_H_
#define _XE_SRIOV_PF_H_

#include <linux/types.h>

struct drm_printer;
struct xe_device;

#ifdef CONFIG_PCI_IOV
bool xe_sriov_pf_readiness(struct xe_device *xe);
int xe_sriov_pf_init_early(struct xe_device *xe);
void xe_sriov_pf_print_vfs_summary(struct xe_device *xe, struct drm_printer *p);
#else
static inline bool xe_sriov_pf_readiness(struct xe_device *xe)
{
	return false;
}

static inline int xe_sriov_pf_init_early(struct xe_device *xe)
{
	return 0;
}
#endif

#endif

```
