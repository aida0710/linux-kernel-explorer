---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/pt3/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

earth-pt3-objs += pt3.o pt3_i2c.o pt3_dma.o

obj-$(CONFIG_DVB_PT3) += earth-pt3.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends
ccflags-y += -I $(srctree)/drivers/media/tuners

```
