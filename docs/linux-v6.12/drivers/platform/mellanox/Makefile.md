---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/mellanox/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for linux/drivers/platform/mellanox
# Mellanox Platform-Specific Drivers
#
obj-$(CONFIG_MLXBF_BOOTCTL)	+= mlxbf-bootctl.o
obj-$(CONFIG_MLXBF_PMC)		+= mlxbf-pmc.o
obj-$(CONFIG_MLXBF_TMFIFO)	+= mlxbf-tmfifo.o
obj-$(CONFIG_MLXREG_HOTPLUG)	+= mlxreg-hotplug.o
obj-$(CONFIG_MLXREG_IO) += mlxreg-io.o
obj-$(CONFIG_MLXREG_LC) += mlxreg-lc.o
obj-$(CONFIG_NVSW_SN2201) += nvsw-sn2201.o

```
