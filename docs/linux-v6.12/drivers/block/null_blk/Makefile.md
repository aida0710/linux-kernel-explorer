---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/block/null_blk/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# needed for trace events
ccflags-y			+= -I$(src)

obj-$(CONFIG_BLK_DEV_NULL_BLK)	+= null_blk.o
null_blk-objs			:= main.o
ifeq ($(CONFIG_BLK_DEV_ZONED), y)
null_blk-$(CONFIG_TRACING) 	+= trace.o
endif
null_blk-$(CONFIG_BLK_DEV_ZONED) += zoned.o

```
