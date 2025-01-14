---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/um/os-Linux/skas/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Copyright (C) 2002 - 2007 Jeff Dike (jdike@{linux.intel,addtoit}.com)
#

obj-y := mem.o process.o

USER_OBJS := $(obj-y)

include $(srctree)/arch/um/scripts/Makefile.rules

```
