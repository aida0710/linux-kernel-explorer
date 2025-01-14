---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/tegra-video/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
tegra-video-objs := \
		video.o \
		vi.o \
		vip.o \
		csi.o

tegra-video-$(CONFIG_ARCH_TEGRA_2x_SOC)  += tegra20.o
tegra-video-$(CONFIG_ARCH_TEGRA_210_SOC) += tegra210.o
obj-$(CONFIG_VIDEO_TEGRA) += tegra-video.o

```
