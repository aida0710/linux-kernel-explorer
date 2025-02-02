---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt76x2/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MT76x2_COMMON
	tristate
	select MT76x02_LIB

config MT76x2E
	tristate "MediaTek MT76x2E (PCIe) support"
	select MT76x2_COMMON
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7612/MT7602/MT7662-based PCIe wireless
	  devices, which comply with IEEE 802.11ac standards and support
	  2SS to 866Mbit/s PHY rate.

	  To compile this driver as a module, choose M here.

config MT76x2U
	tristate "MediaTek MT76x2U (USB) support"
	select MT76x2_COMMON
	select MT76x02_USB
	depends on MAC80211
	depends on USB
	help
	  This adds support for MT7612U-based USB 3.0 wireless dongles,
	  which comply with IEEE 802.11ac standards and support 2SS to
	  866Mbit/s PHY rate.

	  To compile this driver as a module, choose M here.

```
