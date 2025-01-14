---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-rockchip/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS_platsmp.o := -march=armv7-a

obj-$(CONFIG_ARCH_ROCKCHIP) += rockchip.o
obj-$(CONFIG_PM_SLEEP) += pm.o sleep.o
obj-$(CONFIG_SMP) += headsmp.o platsmp.o

```
