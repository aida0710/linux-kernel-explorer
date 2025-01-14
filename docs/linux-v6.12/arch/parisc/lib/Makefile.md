---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/parisc/lib/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for parisc-specific library files
#

lib-y	:= lusercopy.o bitops.o checksum.o io.o memset.o memcpy.o \
	   ucmpdi2.o delay.o

obj-y	:= iomap.o

```
