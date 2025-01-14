---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/cramfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux cramfs routines.
#

obj-$(CONFIG_CRAMFS) += cramfs.o

cramfs-objs := inode.o uncompress.o

```
