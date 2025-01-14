---
sidebar_position: 12
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/ti/wl12xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
wl12xx-objs	= main.o cmd.o acx.o debugfs.o scan.o event.o

obj-$(CONFIG_WL12XX)		+= wl12xx.o

```
