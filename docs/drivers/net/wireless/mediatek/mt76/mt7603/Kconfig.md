---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt7603/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MT7603E
	tristate "MediaTek MT7603E (PCIe) and MT76x8 WLAN support"
	select MT76_CORE
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7603E PCIe wireless devices and the WLAN core
	  on MT7628/MT7688 SoC devices. This family supports IEEE 802.11n 2x2
	  to 300Mbps PHY rate

	  To compile this driver as a module, choose M here.

```
