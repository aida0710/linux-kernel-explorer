---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/imx/dcss/Makefile`

### コンテンツ

```txt
imx-dcss-objs := dcss-drv.o dcss-dev.o dcss-blkctl.o dcss-ctxld.o dcss-dtg.o \
				 dcss-ss.o dcss-dpr.o dcss-scaler.o dcss-kms.o dcss-crtc.o \
				 dcss-plane.o

obj-$(CONFIG_DRM_IMX_DCSS) += imx-dcss.o


```
