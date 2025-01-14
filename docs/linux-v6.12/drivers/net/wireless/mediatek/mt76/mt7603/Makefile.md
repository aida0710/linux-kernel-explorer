---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/mediatek/mt76/mt7603/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MT7603E) += mt7603e.o

mt7603e-y := \
	pci.o soc.o main.o init.o mcu.o \
	core.o dma.o mac.o eeprom.o \
	beacon.o debugfs.o

```
