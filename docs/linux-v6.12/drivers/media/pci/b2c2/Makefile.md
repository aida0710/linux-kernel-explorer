---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/b2c2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ifneq ($(CONFIG_DVB_B2C2_FLEXCOP_PCI),)
b2c2-flexcop-pci-objs += flexcop-dma.o
endif

b2c2-flexcop-pci-objs += flexcop-pci.o
obj-$(CONFIG_DVB_B2C2_FLEXCOP_PCI) += b2c2-flexcop-pci.o

ccflags-y += -I $(srctree)/drivers/media/common/b2c2/

```
