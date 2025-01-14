---
sidebar_position: 4
---
# meson_crtc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/meson/meson_crtc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (C) 2016 BayLibre, SAS
 * Author: Neil Armstrong <narmstrong@baylibre.com>
 * Copyright (C) 2014 Endless Mobile
 *
 * Written by:
 *     Jasper St. Pierre <jstpierre@mecheye.net>
 */

#ifndef __MESON_CRTC_H
#define __MESON_CRTC_H

#include "meson_drv.h"

int meson_crtc_create(struct meson_drm *priv);

void meson_crtc_irq(struct meson_drm *priv);

#endif /* __MESON_CRTC_H */

```
