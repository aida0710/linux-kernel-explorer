---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt7925/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
config MT7925_COMMON
	tristate
	select MT792x_LIB
	select WANT_DEV_COREDUMP

config MT7925E
	tristate "MediaTek MT7925E (PCIe) support"
	select MT7925_COMMON
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7925-based wireless PCIe devices,
	  which support operation at 6GHz, 5GHz, and 2.4GHz IEEE 802.11be
	  2x2:2SS 4096-QAM, 160MHz channels.

	  To compile this driver as a module, choose M here.

config MT7925U
	tristate "MediaTek MT7925U (USB) support"
	select MT792x_USB
	select MT7925_COMMON
	depends on MAC80211
	depends on USB
	help
	  This adds support for MT7925-based wireless USB devices,
	  which support operation at 6GHz, 5GHz, and 2.4GHz IEEE 802.11be
	  2x2:2SS 4096-QAM, 160MHz channels.

	  To compile this driver as a module, choose M here.

```
