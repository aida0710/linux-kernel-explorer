---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pmdomain/bcm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_BCM_PMB)			+= bcm-pmb.o
obj-$(CONFIG_BCM2835_POWER)		+= bcm2835-power.o
obj-$(CONFIG_BCM63XX_POWER)		+= bcm63xx-power.o
obj-$(CONFIG_RASPBERRYPI_POWER)		+= raspberrypi-power.o

```
