---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/phy/realtek/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Phy drivers for Realtek platforms
#

if ARCH_REALTEK || COMPILE_TEST

config PHY_RTK_RTD_USB2PHY
	tristate "Realtek RTD USB2 PHY Transceiver Driver"
	depends on USB_SUPPORT
	select GENERIC_PHY
	select USB_PHY
	select USB_COMMON
	help
	  Enable this to support Realtek SoC USB2 phy transceiver.
	  The DHC (digital home center) RTD series SoCs used the Synopsys
	  DWC3 USB IP. This driver will do the PHY initialization
	  of the parameters.

config PHY_RTK_RTD_USB3PHY
	tristate "Realtek RTD USB3 PHY Transceiver Driver"
	depends on USB_SUPPORT
	select GENERIC_PHY
	select USB_PHY
	select USB_COMMON
	help
	  Enable this to support Realtek SoC USB3 phy transceiver.
	  The DHC (digital home center) RTD series SoCs used the Synopsys
	  DWC3 USB IP. This driver will do the PHY initialization
	  of the parameters.

endif # ARCH_REALTEK || COMPILE_TEST

```
