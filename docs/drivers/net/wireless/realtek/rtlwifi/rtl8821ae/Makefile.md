---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8821ae/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8821ae-objs :=		\
		dm.o		\
		fw.o		\
		hw.o		\
		led.o		\
		phy.o		\
		pwrseq.o	\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o		\


obj-$(CONFIG_RTL8821AE) += rtl8821ae.o

```
