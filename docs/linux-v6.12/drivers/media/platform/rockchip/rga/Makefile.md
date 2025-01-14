---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/rockchip/rga/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
rockchip-rga-objs := rga.o rga-hw.o rga-buf.o

obj-$(CONFIG_VIDEO_ROCKCHIP_RGA) += rockchip-rga.o

```
