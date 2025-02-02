---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/quantenna/qtnfmac/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config QTNFMAC
	tristate
	depends on QTNFMAC_PCIE
	default m if QTNFMAC_PCIE=m
	default y if QTNFMAC_PCIE=y

config QTNFMAC_PCIE
	tristate "Quantenna QSR1000/QSR2000/QSR10g PCIe support"
	default n
	depends on PCI && CFG80211
	select QTNFMAC
	select FW_LOADER
	select CRC32
	help
	  This option adds support for wireless adapters based on Quantenna
	  802.11ac QSR10g (aka Pearl) and QSR1000/QSR2000 (aka Topaz)
	  FullMAC chipsets running over PCIe.

	  If you choose to build it as a module, two modules will be built:
	  qtnfmac.ko and qtnfmac_pcie.ko.

```
