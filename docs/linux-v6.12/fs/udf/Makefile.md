---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/udf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux udf-filesystem routines.
#

obj-$(CONFIG_UDF_FS) += udf.o

udf-objs     := balloc.o dir.o file.o ialloc.o inode.o lowlevel.o namei.o \
		partition.o super.o truncate.o symlink.o \
		directory.o misc.o udftime.o unicode.o

```
