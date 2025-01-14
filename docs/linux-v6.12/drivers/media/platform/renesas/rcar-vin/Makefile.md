---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/renesas/rcar-vin/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rcar-vin-objs = rcar-core.o rcar-dma.o rcar-v4l2.o

obj-$(CONFIG_VIDEO_RCAR_VIN) += rcar-vin.o

```
