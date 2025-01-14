---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/marvell/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_VIDEO_CAFE_CCIC) += cafe_ccic.o mcam-core.o
cafe_ccic-y := cafe-driver.o

obj-$(CONFIG_VIDEO_MMP_CAMERA) += mmp_camera.o mcam-core.o
mmp_camera-y := mmp-driver.o

```
