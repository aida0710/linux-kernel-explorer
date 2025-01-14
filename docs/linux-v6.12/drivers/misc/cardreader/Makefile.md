---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/cardreader/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MISC_ALCOR_PCI)	+= alcor_pci.o
obj-$(CONFIG_MISC_RTSX_PCI)	+= rtsx_pci.o
rtsx_pci-objs := rtsx_pcr.o rts5209.o rts5229.o rtl8411.o rts5227.o rts5249.o rts5260.o rts5261.o rts5228.o rts5264.o
obj-$(CONFIG_MISC_RTSX_USB)	+= rtsx_usb.o

```
