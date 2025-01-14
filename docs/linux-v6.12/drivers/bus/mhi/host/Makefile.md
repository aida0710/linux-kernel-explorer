---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/bus/mhi/host/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_MHI_BUS) += mhi.o
mhi-y := init.o main.o pm.o boot.o
mhi-$(CONFIG_MHI_BUS_DEBUG) += debugfs.o

obj-$(CONFIG_MHI_BUS_PCI_GENERIC) += mhi_pci_generic.o
mhi_pci_generic-y += pci_generic.o

```
