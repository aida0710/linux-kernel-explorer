---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/kmb/Makefile`

### コンテンツ

```txt
kmb-drm-y := kmb_crtc.o kmb_drv.o kmb_plane.o kmb_dsi.o
obj-$(CONFIG_DRM_KMB_DISPLAY)	+= kmb-drm.o

```
