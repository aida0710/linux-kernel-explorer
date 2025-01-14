---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/mcde/Makefile`

### コンテンツ

```txt
mcde_drm-y +=	mcde_drv.o mcde_dsi.o mcde_clk_div.o mcde_display.o

obj-$(CONFIG_DRM_MCDE) += mcde_drm.o

```
