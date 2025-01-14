---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/tracefs/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
tracefs-objs	:= inode.o
tracefs-objs	+= event_inode.o

obj-$(CONFIG_TRACING)	+= tracefs.o


```
