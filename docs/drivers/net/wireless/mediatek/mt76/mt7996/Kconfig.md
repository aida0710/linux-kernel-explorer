---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt7996/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
config MT7996E
	tristate "MediaTek MT7996 (PCIe) support"
	select MT76_CONNAC_LIB
	select WANT_DEV_COREDUMP
	select RELAY
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7996-based PCIe wireless devices,
	  which support concurrent tri-band operation at 6GHz, 5GHz,
	  and 2.4GHz IEEE 802.11be 4x4:4SS 4096-QAM, 320MHz channels.

	  To compile this driver as a module, choose M here.

```
