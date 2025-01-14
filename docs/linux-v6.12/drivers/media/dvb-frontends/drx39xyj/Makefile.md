---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/dvb-frontends/drx39xyj/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
drx39xyj-objs := drxj.o

obj-$(CONFIG_DVB_DRX39XYJ) += drx39xyj.o

ccflags-y += -I$(srctree)/drivers/media/tuners/

```
