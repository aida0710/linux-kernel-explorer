---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/sysv/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux SystemV/Coherent filesystem routines.
#

obj-$(CONFIG_SYSV_FS) += sysv.o

sysv-objs := ialloc.o balloc.o inode.o itree.o file.o dir.o \
	     namei.o super.o

```
