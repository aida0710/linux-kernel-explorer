---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/mediatek/mt76/mt7925/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC

obj-$(CONFIG_MT7925_COMMON) += mt7925-common.o
obj-$(CONFIG_MT7925E) += mt7925e.o
obj-$(CONFIG_MT7925U) += mt7925u.o

mt7925-common-y := mac.o mcu.o main.o init.o debugfs.o
mt7925e-y := pci.o pci_mac.o pci_mcu.o
mt7925u-y := usb.o

```
