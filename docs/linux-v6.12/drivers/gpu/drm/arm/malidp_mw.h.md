---
sidebar_position: 13
---
# malidp_mw.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/arm/malidp_mw.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * (C) COPYRIGHT 2016 ARM Limited. All rights reserved.
 * Author: Brian Starkey <brian.starkey@arm.com>
 *
 */

#ifndef __MALIDP_MW_H__
#define __MALIDP_MW_H__

int malidp_mw_connector_init(struct drm_device *drm);
void malidp_mw_atomic_commit(struct drm_device *drm,
			     struct drm_atomic_state *old_state);
#endif

```
