---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-zynq/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux kernel.
#

# Common support
obj-y				:= common.o slcr.o pm.o
obj-$(CONFIG_SMP)		+= headsmp.o platsmp.o

```
