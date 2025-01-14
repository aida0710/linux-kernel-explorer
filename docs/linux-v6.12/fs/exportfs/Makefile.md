---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/exportfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the filesystem export support routines.

obj-$(CONFIG_EXPORTFS) += exportfs.o

exportfs-objs := expfs.o

```
