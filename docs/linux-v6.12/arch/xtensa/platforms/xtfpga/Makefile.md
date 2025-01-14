---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/xtensa/platforms/xtfpga/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for the Tensilica xtavnet Emulation Board
#
# Note! Dependencies are done automagically by 'make dep', which also
# removes any old dependencies. DON'T put your own dependencies here
# unless it's something special (ie not a .c file).
#
# Note 2! The CFLAGS definitions are in the main makefile...

obj-y			+= setup.o
obj-$(CONFIG_XTFPGA_LCD) += lcd.o

```
