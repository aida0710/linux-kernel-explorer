---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/bfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for BFS filesystem.
#

obj-$(CONFIG_BFS_FS) += bfs.o

bfs-objs := inode.o file.o dir.o

```
