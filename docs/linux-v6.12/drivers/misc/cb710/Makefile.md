---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/cb710/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-$(CONFIG_CB710_DEBUG)	:= -DDEBUG

obj-$(CONFIG_CB710_CORE)	+= cb710.o

cb710-y				:= core.o sgbuf2.o
cb710-$(CONFIG_CB710_DEBUG)	+= debug.o

```
