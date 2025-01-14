---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-x3proto/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y += setup.o ilsel.o

obj-$(CONFIG_GPIOLIB)		+= gpio.o

```
