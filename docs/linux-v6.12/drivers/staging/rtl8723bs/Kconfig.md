---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config RTL8723BS
	tristate "Realtek RTL8723BS SDIO Wireless LAN NIC driver"
	depends on WLAN && MMC && CFG80211
	depends on m
	select CRYPTO
	select CRYPTO_LIB_ARC4
	help
	This option enables support for RTL8723BS SDIO drivers, such as
	the wifi found on the 1st gen Intel Compute Stick, the CHIP
	and many other Intel Atom and ARM based devices.
	If built as a module, it will be called r8723bs.

```
