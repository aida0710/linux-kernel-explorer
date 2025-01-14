---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/efs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux efs-filesystem routines.
#

obj-$(CONFIG_EFS_FS) += efs.o

efs-objs := super.o inode.o namei.o dir.o file.o symlink.o

```
