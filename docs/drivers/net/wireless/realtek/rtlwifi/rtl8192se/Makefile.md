---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192se/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8192se-objs :=		\
		dm.o		\
		fw.o		\
		hw.o		\
		led.o		\
		phy.o		\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o

obj-$(CONFIG_RTL8192SE) += rtl8192se.o


```
