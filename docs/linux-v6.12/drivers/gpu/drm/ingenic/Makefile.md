---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ingenic/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_DRM_INGENIC) += ingenic-drm.o
ingenic-drm-y = ingenic-drm-drv.o
ingenic-drm-$(CONFIG_DRM_INGENIC_IPU) += ingenic-ipu.o
obj-$(CONFIG_DRM_INGENIC_DW_HDMI) += ingenic-dw-hdmi.o

```
