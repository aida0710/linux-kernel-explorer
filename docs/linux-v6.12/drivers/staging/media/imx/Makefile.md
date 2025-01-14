---
sidebar_position: 18
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/imx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
imx-media-common-objs := imx-media-capture.o imx-media-dev-common.o \
	imx-media-of.o imx-media-utils.o

imx6-media-objs := imx-media-dev.o imx-media-internal-sd.o \
	imx-ic-common.o imx-ic-prp.o imx-ic-prpencvf.o imx-media-vdic.o \
	imx-media-csc-scaler.o

imx6-media-csi-objs := imx-media-csi.o imx-media-fim.o

obj-$(CONFIG_VIDEO_IMX_MEDIA) += imx-media-common.o
obj-$(CONFIG_VIDEO_IMX_MEDIA) += imx6-media.o
obj-$(CONFIG_VIDEO_IMX_MEDIA) += imx6-media-csi.o
obj-$(CONFIG_VIDEO_IMX_MEDIA) += imx6-mipi-csi2.o

```
