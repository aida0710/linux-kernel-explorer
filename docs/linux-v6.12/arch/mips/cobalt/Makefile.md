---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/cobalt/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Cobalt micro systems family specific parts of the kernel
#

obj-y := buttons.o irq.o lcd.o led.o mtd.o reset.o rtc.o serial.o setup.o time.o

obj-$(CONFIG_PCI)		+= pci.o

```
