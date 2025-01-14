---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/platforms/pasemi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y	+= setup.o pci.o time.o idle.o powersave.o iommu.o dma_lib.o misc.o
obj-$(CONFIG_PPC_PASEMI_MDIO)	+= gpio_mdio.o
obj-$(CONFIG_PCI_MSI)		+= msi.o

```
