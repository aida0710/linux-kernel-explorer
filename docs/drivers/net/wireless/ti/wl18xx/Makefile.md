---
sidebar_position: 14
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/ti/wl18xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
wl18xx-objs	= main.o acx.o tx.o io.o debugfs.o scan.o cmd.o event.o

obj-$(CONFIG_WL18XX)		+= wl18xx.o

```
