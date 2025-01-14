---
sidebar_position: 16
---
# sti_gdp.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/sti/sti_gdp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) STMicroelectronics SA 2014
 * Authors: Benjamin Gaignard <benjamin.gaignard@st.com>
 *          Fabien Dessenne <fabien.dessenne@st.com>
 *          for STMicroelectronics.
 */

#ifndef _STI_GDP_H_
#define _STI_GDP_H_

#include <linux/types.h>

#include <drm/drm_plane.h>

struct drm_device;
struct device;

struct drm_plane *sti_gdp_create(struct drm_device *drm_dev,
				 struct device *dev, int desc,
				 void __iomem *baseaddr,
				 unsigned int possible_crtcs,
				 enum drm_plane_type type);
#endif

```
