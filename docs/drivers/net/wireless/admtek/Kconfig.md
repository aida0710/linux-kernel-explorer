---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/admtek/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WLAN_VENDOR_ADMTEK
	bool "ADMtek devices"
	default y
	help
	  If you have a wireless card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about these cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if WLAN_VENDOR_ADMTEK

config ADM8211
	tristate "ADMtek ADM8211 support"
	depends on MAC80211 && PCI
	select CRC32
	select EEPROM_93CX6
	help
	  This driver is for ADM8211A, ADM8211B, and ADM8211C based cards.
	  These are PCI/mini-PCI/Cardbus 802.11b chips found in cards such as:

	  Xterasys Cardbus XN-2411b
	  Blitz NetWave Point PC
	  TrendNet 221pc
	  Belkin F5D6001
	  SMC 2635W
	  Linksys WPC11 v1
	  Fiberline FL-WL-200X
	  3com Office Connect (3CRSHPW796)
	  Corega WLPCIB-11
	  SMC 2602W V2 EU
	  D-Link DWL-520 Revision C

	  However, some of these cards have been replaced with other chips
	  like the RTL8180L (Xterasys Cardbus XN-2411b, Belkin F5D6001) or
	  the Ralink RT2400 (SMC2635W) without a model number change.

	  Thanks to Infineon-ADMtek for their support of this driver.

endif # WLAN_VENDOR_ADMTEK

```
