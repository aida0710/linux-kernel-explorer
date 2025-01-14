---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/pt1/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
earth-pt1-objs := pt1.o

obj-$(CONFIG_DVB_PT1) += earth-pt1.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends
ccflags-y += -I $(srctree)/drivers/media/tuners

```
