---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/hostfs/Makefile`

### コンテンツ

```txt
#
# Copyright (C) 2000 Jeff Dike (jdike@karaya.com)
# Licensed under the GPL
#

hostfs-objs := hostfs_kern.o

hostfs-builtin-$(CONFIG_HOSTFS) += hostfs_user.o hostfs_user_exp.o

obj-y := $(hostfs-builtin-y) $(hostfs-builtin-m)
obj-$(CONFIG_HOSTFS) += hostfs.o

include $(srctree)/arch/um/scripts/Makefile.rules

```
