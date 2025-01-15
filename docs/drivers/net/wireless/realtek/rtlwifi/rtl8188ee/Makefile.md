---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8188ee/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8188ee-objs :=		\
		dm.o		\
		fw.o		\
		hw.o		\
		led.o		\
		phy.o		\
		pwrseq.o	\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o

obj-$(CONFIG_RTL8188EE) += rtl8188ee.o

```
