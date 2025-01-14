---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/logicvc/Makefile`

### コンテンツ

```txt
logicvc-drm-y += \
	logicvc_crtc.o \
	logicvc_drm.o \
	logicvc_interface.o \
	logicvc_layer.o \
	logicvc_mode.o \
	logicvc_of.o

obj-$(CONFIG_DRM_LOGICVC) += logicvc-drm.o

```
