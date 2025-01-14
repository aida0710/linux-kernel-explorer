---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-sdk7786/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y	:= fpga.o irq.o nmi.o setup.o

obj-$(CONFIG_GPIOLIB)		+= gpio.o
obj-$(CONFIG_HAVE_SRAM_POOL)	+= sram.o

```
