---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192du/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8192du-objs :=		\
		dm.o		\
		fw.o		\
		hw.o		\
		led.o		\
		phy.o		\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o

obj-$(CONFIG_RTL8192DU) += rtl8192du.o

```
