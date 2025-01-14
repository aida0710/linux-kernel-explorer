---
sidebar_position: 16
---
# meson_encoder_hdmi.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/meson/meson_encoder_hdmi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (C) 2021 BayLibre, SAS
 * Author: Neil Armstrong <narmstrong@baylibre.com>
 */

#ifndef __MESON_ENCODER_HDMI_H
#define __MESON_ENCODER_HDMI_H

int meson_encoder_hdmi_probe(struct meson_drm *priv);
void meson_encoder_hdmi_remove(struct meson_drm *priv);

#endif /* __MESON_ENCODER_HDMI_H */

```
