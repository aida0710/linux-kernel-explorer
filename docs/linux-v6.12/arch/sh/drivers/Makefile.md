---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/drivers/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux SuperH-specific device drivers.
#

obj-y		+= dma/ platform_early.o

obj-$(CONFIG_PCI)		+= pci/
obj-$(CONFIG_PUSH_SWITCH)	+= push-switch.o
obj-$(CONFIG_HEARTBEAT)		+= heartbeat.o

```
