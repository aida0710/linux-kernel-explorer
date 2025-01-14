---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/rb532/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the RB532 board specific parts of the kernel
#

obj-$(CONFIG_SERIAL_8250_CONSOLE) += serial.o

obj-y	 += irq.o time.o setup.o prom.o gpio.o devices.o

```
