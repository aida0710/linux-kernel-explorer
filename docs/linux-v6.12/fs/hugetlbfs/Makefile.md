---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/hugetlbfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux ramfs routines.
#

obj-$(CONFIG_HUGETLBFS) += hugetlbfs.o

hugetlbfs-objs := inode.o

```
