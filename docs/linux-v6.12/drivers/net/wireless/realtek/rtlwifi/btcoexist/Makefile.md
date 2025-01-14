---
sidebar_position: 16
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtlwifi/btcoexist/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
btcoexist-objs :=	halbtc8192e2ant.o	\
			halbtc8723b1ant.o	\
			halbtc8723b2ant.o	\
			halbtc8821a1ant.o	\
			halbtc8821a2ant.o	\
			halbtcoutsrc.o		\
			rtl_btc.o

obj-$(CONFIG_RTLBTCOEXIST) += btcoexist.o

```
