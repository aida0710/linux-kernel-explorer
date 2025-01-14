---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/exfat/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-or-later
#
# Makefile for the linux exFAT filesystem support.
#
obj-$(CONFIG_EXFAT_FS) += exfat.o

exfat-y	:= inode.o namei.o dir.o super.o fatent.o cache.o nls.o misc.o \
	   file.o balloc.o

```
