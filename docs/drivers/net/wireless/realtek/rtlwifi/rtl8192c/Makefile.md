---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192c/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
rtl8192c-common-objs :=		\
		main.o		\
		dm_common.o	\
		fw_common.o	\
		phy_common.o

obj-$(CONFIG_RTL8192C_COMMON) += rtl8192c-common.o

```
