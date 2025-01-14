---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/dm1105/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DVB_DM1105) += dm1105.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends

```
