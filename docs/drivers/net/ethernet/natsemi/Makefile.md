---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/natsemi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the National Semiconductor Sonic devices.
#

obj-$(CONFIG_MACSONIC) += macsonic.o
obj-$(CONFIG_MIPS_JAZZ_SONIC) += jazzsonic.o
obj-$(CONFIG_NATSEMI) += natsemi.o
obj-$(CONFIG_NS83820) += ns83820.o
obj-$(CONFIG_XTENSA_XT2000_SONIC) += xtsonic.o

```
