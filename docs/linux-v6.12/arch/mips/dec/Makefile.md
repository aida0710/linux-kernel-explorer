---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/dec/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the DECstation family specific parts of the kernel
#

obj-y		:= ecc-berr.o int-handler.o ioasic-irq.o kn01-berr.o \
		   kn02-irq.o kn02xa-berr.o platform.o reset.o setup.o time.o

obj-$(CONFIG_TC)		+= tc.o
obj-$(CONFIG_CPU_HAS_WB)	+= wbflush.o

```
