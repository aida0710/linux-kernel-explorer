---
sidebar_position: 23
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/md/persistent-data/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_DM_PERSISTENT_DATA) += dm-persistent-data.o
dm-persistent-data-objs := \
	dm-array.o \
	dm-bitset.o \
	dm-block-manager.o \
	dm-space-map-common.o \
	dm-space-map-disk.o \
	dm-space-map-metadata.o \
	dm-transaction-manager.o \
	dm-btree.o \
	dm-btree-remove.o \
	dm-btree-spine.o

```
