---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/broadcom/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_BCM2711_THERMAL)		+= bcm2711_thermal.o
obj-$(CONFIG_BCM2835_THERMAL)		+= bcm2835_thermal.o
obj-$(CONFIG_BRCMSTB_THERMAL)		+= brcmstb_thermal.o
obj-$(CONFIG_BCM_NS_THERMAL)		+= ns-thermal.o
obj-$(CONFIG_BCM_SR_THERMAL)		+= sr-thermal.o

```
