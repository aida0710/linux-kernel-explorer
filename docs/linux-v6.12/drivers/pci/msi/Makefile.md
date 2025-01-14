---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pci/msi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the PCI/MSI
obj-$(CONFIG_PCI)			+= pcidev_msi.o
obj-$(CONFIG_PCI_MSI)			+= api.o msi.o irqdomain.o
obj-$(CONFIG_PCI_MSI_ARCH_FALLBACKS)	+= legacy.o

```
