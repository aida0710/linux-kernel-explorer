---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/broadcom/b43legacy/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# b43legacy core
b43legacy-y				+= main.o
b43legacy-y				+= ilt.o
b43legacy-y				+= phy.o
b43legacy-y				+= radio.o
b43legacy-y				+= sysfs.o
b43legacy-y				+= xmit.o
# b43 RFKILL button support
b43legacy-y				+= rfkill.o
# b43legacy LED support
b43legacy-$(CONFIG_B43LEGACY_LEDS)	+= leds.o
# b43legacy debugging
b43legacy-$(CONFIG_B43LEGACY_DEBUG)	+= debugfs.o
# b43legacy DMA and PIO
b43legacy-$(CONFIG_B43LEGACY_DMA)	+= dma.o
b43legacy-$(CONFIG_B43LEGACY_PIO)	+= pio.o

obj-$(CONFIG_B43LEGACY)			+= b43legacy.o


```
