---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/block/xen-blkback/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_XEN_BLKDEV_BACKEND) := xen-blkback.o

xen-blkback-y	:= blkback.o xenbus.o

```
