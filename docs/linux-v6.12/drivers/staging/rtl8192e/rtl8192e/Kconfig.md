---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8192e/rtl8192e/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config RTL8192E
	tristate "RealTek RTL8192E Wireless LAN NIC driver"
	depends on PCI && WLAN && RTLLIB
	depends on m
	select CFG80211
	select WIRELESS_EXT
	select WEXT_PRIV
	select CRYPTO
	select FW_LOADER

```
