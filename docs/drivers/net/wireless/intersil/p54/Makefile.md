---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/intersil/p54/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
p54common-objs			:= eeprom.o fwio.o txrx.o main.o
p54common-$(CONFIG_P54_LEDS)	+= led.o

obj-$(CONFIG_P54_COMMON)	+= p54common.o
obj-$(CONFIG_P54_USB)		+= p54usb.o
obj-$(CONFIG_P54_PCI)		+= p54pci.o
obj-$(CONFIG_P54_SPI)		+= p54spi.o

```
