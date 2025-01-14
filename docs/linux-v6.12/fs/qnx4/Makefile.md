---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/qnx4/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux qnx4-filesystem routines.
#

obj-$(CONFIG_QNX4FS_FS) += qnx4.o

qnx4-objs := inode.o dir.o namei.o bitmap.o

```
