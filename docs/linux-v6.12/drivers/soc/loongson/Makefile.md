---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/loongson/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
#
# Makefile for the Linux Kernel SoC Loongson-2 specific device drivers
#

obj-$(CONFIG_LOONGSON2_GUTS)		+= loongson2_guts.o
obj-$(CONFIG_LOONGSON2_PM)		+= loongson2_pm.o

```
