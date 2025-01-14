---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/comedi/kcomedilib/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ccflags-$(CONFIG_COMEDI_DEBUG)		:= -DDEBUG

obj-$(CONFIG_COMEDI_KCOMEDILIB)	+= kcomedilib.o

kcomedilib-objs := kcomedilib_main.o

```
