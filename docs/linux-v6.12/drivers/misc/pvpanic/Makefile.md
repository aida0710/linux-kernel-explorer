---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/pvpanic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
#
# Pvpanic Makefile
#
# Copyright (C) 2021 Oracle.
#
obj-$(CONFIG_PVPANIC_MMIO)	+= pvpanic.o pvpanic-mmio.o
obj-$(CONFIG_PVPANIC_PCI)	+= pvpanic.o pvpanic-pci.o

```
