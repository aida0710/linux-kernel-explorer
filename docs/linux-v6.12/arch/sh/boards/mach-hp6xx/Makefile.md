---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-hp6xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the HP6xx specific parts of the kernel
#

obj-y			:= setup.o
obj-$(CONFIG_PM)	+= pm.o pm_wakeup.o
obj-$(CONFIG_APM_EMULATION)	+= hp6xx_apm.o

```
