---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/pluto2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_DVB_PLUTO2) += pluto2.o

ccflags-y += -I $(srctree)/drivers/media/dvb-frontends/

```
