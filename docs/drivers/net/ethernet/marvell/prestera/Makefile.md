---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/marvell/prestera/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_PRESTERA)	+= prestera.o
prestera-objs		:= prestera_main.o prestera_hw.o prestera_dsa.o \
			   prestera_rxtx.o prestera_devlink.o prestera_ethtool.o \
			   prestera_switchdev.o prestera_acl.o prestera_flow.o \
			   prestera_flower.o prestera_span.o prestera_counter.o \
			   prestera_router.o prestera_router_hw.o prestera_matchall.o

obj-$(CONFIG_PRESTERA_PCI)	+= prestera_pci.o

```
