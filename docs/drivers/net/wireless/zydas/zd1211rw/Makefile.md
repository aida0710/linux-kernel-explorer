---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/zydas/zd1211rw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_ZD1211RW) += zd1211rw.o

zd1211rw-objs := zd_chip.o zd_mac.o \
		zd_rf_al2230.o zd_rf_rf2959.o \
		zd_rf_al7230b.o zd_rf_uw2453.o \
		zd_rf.o zd_usb.o

ccflags-$(CONFIG_ZD1211RW_DEBUG) := -DDEBUG


```
