---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtlwifi/rtl8192ce/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8192ce-objs :=		\
		dm.o		\
		hw.o		\
		led.o		\
		phy.o		\
		rf.o		\
		sw.o		\
		table.o		\
		trx.o

obj-$(CONFIG_RTL8192CE) += rtl8192ce.o

```
