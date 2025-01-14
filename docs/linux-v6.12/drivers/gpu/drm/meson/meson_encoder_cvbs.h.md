---
sidebar_position: 12
---
# meson_encoder_cvbs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/meson/meson_encoder_cvbs.h`

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

#ifndef __MESON_VENC_CVBS_H
#define __MESON_VENC_CVBS_H

#include "meson_drv.h"
#include "meson_venc.h"

struct meson_cvbs_mode {
	struct meson_cvbs_enci_mode *enci;
	struct drm_display_mode mode;
};

#define MESON_CVBS_MODES_COUNT	2

/* Modes supported by the CVBS output */
extern struct meson_cvbs_mode meson_cvbs_modes[MESON_CVBS_MODES_COUNT];

int meson_encoder_cvbs_probe(struct meson_drm *priv);
void meson_encoder_cvbs_remove(struct meson_drm *priv);

#endif /* __MESON_VENC_CVBS_H */

```
