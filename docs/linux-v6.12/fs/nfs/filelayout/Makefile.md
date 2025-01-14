---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/nfs/filelayout/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the pNFS Files Layout Driver kernel module
#
obj-$(CONFIG_PNFS_FILE_LAYOUT) += nfs_layout_nfsv41_files.o
nfs_layout_nfsv41_files-y := filelayout.o filelayoutdev.o

```
