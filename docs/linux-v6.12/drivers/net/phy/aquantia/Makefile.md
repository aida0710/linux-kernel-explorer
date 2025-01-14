---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/phy/aquantia/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
aquantia-objs			+= aquantia_main.o aquantia_firmware.o aquantia_leds.o
ifdef CONFIG_HWMON
aquantia-objs			+= aquantia_hwmon.o
endif
obj-$(CONFIG_AQUANTIA_PHY)	+= aquantia.o

```
