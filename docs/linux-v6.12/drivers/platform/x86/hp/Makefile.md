---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/hp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for linux/drivers/platform/x86/hp
# HP x86 Platform-Specific Drivers
#

# Hewlett Packard
obj-$(CONFIG_HP_ACCEL)		+= hp_accel.o
obj-$(CONFIG_HP_WMI)		+= hp-wmi.o
obj-$(CONFIG_TC1100_WMI)	+= tc1100-wmi.o
obj-$(CONFIG_HP_BIOSCFG)	+= hp-bioscfg/

```
