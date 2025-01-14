---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/nvidia/tegra-vde/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
tegra-vde-y := vde.o iommu.o dmabuf-cache.o h264.o v4l2.o
obj-$(CONFIG_VIDEO_TEGRA_VDE)	+= tegra-vde.o

```
