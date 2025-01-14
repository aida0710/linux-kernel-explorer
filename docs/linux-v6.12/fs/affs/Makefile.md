---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/affs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux affs filesystem routines.
#

#ccflags-y := -DDEBUG=1

obj-$(CONFIG_AFFS_FS) += affs.o

affs-objs := super.o namei.o inode.o file.o dir.o amigaffs.o bitmap.o symlink.o

```
