---
sidebar_position: 27
---
# rcar_mipi_dsi.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/renesas/rcar-du/rcar_mipi_dsi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * R-Car DSI Encoder
 *
 * Copyright (C) 2022 Renesas Electronics Corporation
 *
 * Contact: Tomi Valkeinen <tomi.valkeinen@ideasonboard.com>
 */

#ifndef __RCAR_MIPI_DSI_H__
#define __RCAR_MIPI_DSI_H__

struct drm_atomic_state;
struct drm_bridge;

#if IS_ENABLED(CONFIG_DRM_RCAR_MIPI_DSI)
void rcar_mipi_dsi_pclk_enable(struct drm_bridge *bridge,
			       struct drm_atomic_state *state);
void rcar_mipi_dsi_pclk_disable(struct drm_bridge *bridge);
#else
static inline void rcar_mipi_dsi_pclk_enable(struct drm_bridge *bridge,
					     struct drm_atomic_state *state)
{
}

static inline void rcar_mipi_dsi_pclk_disable(struct drm_bridge *bridge)
{
}
#endif /* CONFIG_DRM_RCAR_MIPI_DSI */

#endif /* __RCAR_MIPI_DSI_H__ */

```
