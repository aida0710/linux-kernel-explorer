---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8723ae/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8723ae-objs :=		\
		dm.o		\
		fw.o		\
		hal_btc.o	\
		hal_bt_coexist.o\
		hw.o		\
		led.o		\
		phy.o		\
		pwrseq.o	\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o		\


obj-$(CONFIG_RTL8723AE) += rtl8723ae.o

```
