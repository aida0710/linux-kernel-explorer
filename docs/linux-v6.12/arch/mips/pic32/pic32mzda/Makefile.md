---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/pic32/pic32mzda/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Joshua Henderson, <joshua.henderson@microchip.com>
# Copyright (C) 2015 Microchip Technology, Inc.  All rights reserved.
#
obj-y			:= config.o early_clk.o init.o time.o

obj-$(CONFIG_EARLY_PRINTK)	+= early_console.o      \
				   early_pin.o

```
