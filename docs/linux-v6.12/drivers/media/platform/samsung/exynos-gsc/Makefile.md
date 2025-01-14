---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/samsung/exynos-gsc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
exynos-gsc-objs := gsc-core.o gsc-m2m.o gsc-regs.o

obj-$(CONFIG_VIDEO_SAMSUNG_EXYNOS_GSC)	+= exynos-gsc.o

```
