---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/efivarfs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the efivarfs filesystem
#

obj-$(CONFIG_EFIVAR_FS)		+= efivarfs.o

efivarfs-objs			:= inode.o file.o super.o vars.o

```
