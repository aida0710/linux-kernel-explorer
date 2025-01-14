---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/mediatek/mt76/mt76x0/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MT76x0_COMMON
	tristate
	select MT76x02_LIB

config MT76x0U
	tristate "MediaTek MT76x0U (USB) support"
	select MT76x0_COMMON
	select MT76x02_USB
	depends on MAC80211
	depends on USB
	help
	  This adds support for MT7610U-based USB 2.0 wireless dongles,
	  which comply with IEEE 802.11ac standards and support 1x1
	  433Mbps PHY rate.

	  To compile this driver as a module, choose M here.

config MT76x0E
	tristate "MediaTek MT76x0E (PCIe) support"
	select MT76x0_COMMON
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7610/MT7630-based PCIe wireless devices,
	  which comply with IEEE 802.11ac standards and support 1x1
	  433Mbps PHY rate.

	  To compile this driver as a module, choose M here.

```
