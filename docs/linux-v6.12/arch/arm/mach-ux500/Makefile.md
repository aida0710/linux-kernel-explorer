---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-ux500/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux kernel, U8500 machine.
#

obj-y				:= pm.o
obj-$(CONFIG_UX500_SOC_DB8500)	+= cpu-db8500.o
obj-$(CONFIG_SMP)		+= platsmp.o

```
