---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/bcm47xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the BCM47XX specific kernel interface routines
# under Linux.
#

obj-y				+= irq.o prom.o serial.o setup.o time.o
obj-y				+= board.o buttons.o leds.o workarounds.o

```
