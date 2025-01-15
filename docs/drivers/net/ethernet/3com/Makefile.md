---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/3com/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the 3Com Ethernet device drivers
#

obj-$(CONFIG_EL3) += 3c509.o
obj-$(CONFIG_3C515) += 3c515.o
obj-$(CONFIG_PCMCIA_3C589) += 3c589_cs.o
obj-$(CONFIG_PCMCIA_3C574) += 3c574_cs.o
obj-$(CONFIG_VORTEX) += 3c59x.o
obj-$(CONFIG_TYPHOON) += typhoon.o

```
