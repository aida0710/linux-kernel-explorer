---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/qnx6/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux qnx4-filesystem routines.
#

obj-$(CONFIG_QNX6FS_FS) += qnx6.o

qnx6-objs := inode.o dir.o namei.o super_mmi.o
ccflags-$(CONFIG_QNX6FS_DEBUG)	+= -DDEBUG

```
