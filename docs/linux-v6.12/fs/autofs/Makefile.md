---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/autofs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux autofs-filesystem routines.
#

obj-$(CONFIG_AUTOFS_FS) += autofs4.o

autofs4-objs := init.o inode.o root.o symlink.o waitq.o expire.o dev-ioctl.o

```
