---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/zonefs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
ccflags-y				+= -I$(src)

obj-$(CONFIG_ZONEFS_FS) += zonefs.o

zonefs-y	:= super.o file.o sysfs.o

```
