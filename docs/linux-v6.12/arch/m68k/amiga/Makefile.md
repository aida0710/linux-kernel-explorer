---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/m68k/amiga/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Linux arch/m68k/amiga source directory
#

obj-y		:= config.o amiints.o cia.o chipram.o amisound.o platform.o

obj-$(CONFIG_AMIGA_PCMCIA)	+= pcmcia.o

```
