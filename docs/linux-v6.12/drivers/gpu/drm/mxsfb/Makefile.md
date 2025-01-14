---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/mxsfb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
mxsfb-y := mxsfb_drv.o mxsfb_kms.o
obj-$(CONFIG_DRM_MXSFB)	+= mxsfb.o
imx-lcdif-y := lcdif_drv.o lcdif_kms.o
obj-$(CONFIG_DRM_IMX_LCDIF) += imx-lcdif.o

```
