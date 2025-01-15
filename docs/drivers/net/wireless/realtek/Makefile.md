---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/realtek/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Wireless network device drivers for Realtek units
#

obj-$(CONFIG_RTL8180)		+= rtl818x/
obj-$(CONFIG_RTL8187)		+= rtl818x/
obj-$(CONFIG_RTLWIFI)		+= rtlwifi/
obj-$(CONFIG_RTL8XXXU)		+= rtl8xxxu/
obj-$(CONFIG_RTW88)		+= rtw88/
obj-$(CONFIG_RTW89)		+= rtw89/


```
