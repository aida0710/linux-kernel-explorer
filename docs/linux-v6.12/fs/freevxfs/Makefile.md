---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/freevxfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# VxFS Makefile
#

obj-$(CONFIG_VXFS_FS) += freevxfs.o

freevxfs-objs := vxfs_bmap.o vxfs_fshead.o vxfs_immed.o vxfs_inode.o \
		 vxfs_lookup.o vxfs_olt.o vxfs_subr.o vxfs_super.o

```
