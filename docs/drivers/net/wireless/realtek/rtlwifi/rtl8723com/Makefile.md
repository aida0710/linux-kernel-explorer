---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8723com/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8723-common-objs :=		\
		main.o		\
		dm_common.o	\
		fw_common.o	\
		phy_common.o

obj-$(CONFIG_RTL8723_COMMON) += rtl8723-common.o

```
