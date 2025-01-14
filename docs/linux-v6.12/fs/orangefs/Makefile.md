---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/orangefs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the ORANGEFS filesystem.
#

obj-$(CONFIG_ORANGEFS_FS) += orangefs.o

orangefs-objs := acl.o file.o orangefs-cache.o orangefs-utils.o xattr.o \
		 dcache.o inode.o orangefs-sysfs.o orangefs-mod.o super.o \
		 devorangefs-req.o namei.o symlink.o dir.o orangefs-bufmap.o \
		 orangefs-debugfs.o waitqueue.o

```
