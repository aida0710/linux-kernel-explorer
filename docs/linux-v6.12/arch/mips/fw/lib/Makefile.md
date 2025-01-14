---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/fw/lib/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for generic prom monitor library routines under Linux.
#

lib-y			+= cmdline.o

lib-$(CONFIG_64BIT)	+= call_o32.o

```
