---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/fs/notify/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_FSNOTIFY)		+= fsnotify.o notification.o group.o mark.o \
				   fdinfo.o

obj-y			+= dnotify/
obj-y			+= inotify/
obj-y			+= fanotify/

```
