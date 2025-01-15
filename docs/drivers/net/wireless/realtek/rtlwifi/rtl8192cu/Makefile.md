---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192cu/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8192cu-objs :=		\
		dm.o		\
		hw.o		\
		led.o		\
		mac.o		\
		phy.o		\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o

obj-$(CONFIG_RTL8192CU) += rtl8192cu.o

```
