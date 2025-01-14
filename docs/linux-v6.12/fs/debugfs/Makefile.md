---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/debugfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
debugfs-objs	:= inode.o file.o

obj-$(CONFIG_DEBUG_FS)	+= debugfs.o


```
