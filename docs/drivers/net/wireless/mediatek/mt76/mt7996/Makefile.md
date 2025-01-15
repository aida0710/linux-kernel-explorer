---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt7996/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC

obj-$(CONFIG_MT7996E) += mt7996e.o

mt7996e-y := pci.o init.o dma.o eeprom.o main.o mcu.o mac.o \
	     debugfs.o mmio.o

mt7996e-$(CONFIG_DEV_COREDUMP) += coredump.o

```
