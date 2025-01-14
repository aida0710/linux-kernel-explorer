---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/m68k/tools/amiga/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

CC =		m68k-cbm-amigados-gcc
CFLAGS =	-Wall -O2


All:		dmesg


dmesg:		dmesg.c
		$(CC) $(CFLAGS) -o dmesg dmesg.c -noixemul


```
