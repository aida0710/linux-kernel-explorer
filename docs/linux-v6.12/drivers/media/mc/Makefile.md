---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/mc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

mc-objs	:= mc-device.o mc-devnode.o mc-entity.o \
	   mc-request.o

ifneq ($(CONFIG_USB),)
	mc-objs += mc-dev-allocator.o
endif

obj-$(CONFIG_MEDIA_SUPPORT) += mc.o

```
