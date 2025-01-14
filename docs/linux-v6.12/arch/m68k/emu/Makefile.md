---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/m68k/emu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Linux arch/m68k/emu source directory
#

obj-y			+= natfeat.o

obj-$(CONFIG_NFBLOCK)	+= nfblock.o
obj-$(CONFIG_NFCON)	+= nfcon.o
obj-$(CONFIG_NFETH)	+= nfeth.o

```
