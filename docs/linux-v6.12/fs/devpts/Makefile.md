---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/devpts/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux /dev/pts virtual filesystem.
#

obj-$(CONFIG_UNIX98_PTYS)		+= devpts.o

devpts-$(CONFIG_UNIX98_PTYS)		:= inode.o

```
