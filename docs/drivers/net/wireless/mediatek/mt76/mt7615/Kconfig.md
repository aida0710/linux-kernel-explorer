---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/mediatek/mt76/mt7615/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config MT7615_COMMON
	tristate
	select WANT_DEV_COREDUMP
	select MT76_CONNAC_LIB

config MT7615E
	tristate "MediaTek MT7615E and MT7663E (PCIe) support"
	select MT7615_COMMON
	depends on MAC80211
	depends on PCI
	help
	  This adds support for MT7615-based PCIe wireless devices,
	  which support concurrent dual-band operation at both 5GHz
	  and 2.4GHz, IEEE 802.11ac 4x4:4SS 1733Mbps PHY rate, wave2
	  MU-MIMO up to 4 users/group and 160MHz channels.

	  To compile this driver as a module, choose M here.

config MT7622_WMAC
	bool "MT7622 (SoC) WMAC support"
	depends on MT7615E
	depends on ARCH_MEDIATEK || COMPILE_TEST
	select REGMAP
	default y
	help
	  This adds support for the built-in WMAC on MT7622 SoC devices
	  which has the same feature set as a MT7615, but limited to
	  2.4 GHz only.

config MT7663_USB_SDIO_COMMON
	tristate
	select MT7615_COMMON

config MT7663U
	tristate "MediaTek MT7663U (USB) support"
	select MT76_USB
	select MT7663_USB_SDIO_COMMON
	depends on MAC80211
	depends on USB
	help
	  This adds support for MT7663U 802.11ac 2x2:2 wireless devices.

	  To compile this driver as a module, choose M here.

config MT7663S
	tristate "MediaTek MT7663S (SDIO) support"
	select MT76_SDIO
	select MT7663_USB_SDIO_COMMON
	depends on MAC80211
	depends on MMC
	help
	  This adds support for MT7663S 802.11ac 2x2:2 wireless devices.

	  To compile this driver as a module, choose M here.

```
