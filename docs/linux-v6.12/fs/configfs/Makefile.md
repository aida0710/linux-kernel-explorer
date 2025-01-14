---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/configfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the configfs virtual filesystem
#

obj-$(CONFIG_CONFIGFS_FS)	+= configfs.o

configfs-objs	:= inode.o file.o dir.o symlink.o mount.o item.o

```
