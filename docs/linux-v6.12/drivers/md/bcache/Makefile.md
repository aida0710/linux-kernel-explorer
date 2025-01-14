---
sidebar_position: 18
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/md/bcache/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_BCACHE)	+= bcache.o

bcache-y		:= alloc.o bset.o btree.o debug.o extents.o io.o\
	journal.o movinggc.o request.o stats.o super.o sysfs.o trace.o\
	util.o writeback.o features.o

```
