---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `drivers/net/can/esd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
#  Makefile for esd gmbh ESDACC controller driver
#
esd_402_pci-objs := esdacc.o esd_402_pci-core.o

obj-$(CONFIG_CAN_ESD_402_PCI) += esd_402_pci.o

```
