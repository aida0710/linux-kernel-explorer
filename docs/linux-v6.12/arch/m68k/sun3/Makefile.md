---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/m68k/sun3/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Linux arch/m68k/sun3 source directory
#

obj-y	:= sun3ints.o sun3dvma.o idprom.o

obj-$(CONFIG_SUN3) += config.o mmu_emu.o leds.o dvma.o intersil.o prom/

```
