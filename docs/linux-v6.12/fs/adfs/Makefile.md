---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/adfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux adfs filesystem routines.
#

obj-$(CONFIG_ADFS_FS) += adfs.o

adfs-objs := dir.o dir_f.o dir_fplus.o file.o inode.o map.o super.o

```
