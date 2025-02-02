---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/pcs/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# PCS Layer Configuration
#

menu "PCS device drivers"

config PCS_XPCS
	tristate "Synopsys DesignWare Ethernet XPCS"
	select PHYLINK
	help
	  This module provides a driver and helper functions for Synopsys
	  DesignWare XPCS controllers.

config PCS_LYNX
	tristate
	help
	  This module provides helpers to phylink for managing the Lynx PCS
	  which is part of the Layerscape and QorIQ Ethernet SERDES.

config PCS_MTK_LYNXI
	tristate
	select REGMAP
	help
	  This module provides helpers to phylink for managing the LynxI PCS
	  which is part of MediaTek's SoC and Ethernet switch ICs.

config PCS_RZN1_MIIC
	tristate "Renesas RZ/N1 MII converter"
	depends on OF && (ARCH_RZN1 || COMPILE_TEST)
	help
	  This module provides a driver for the MII converter that is available
	  on RZ/N1 SoCs. This PCS converts MII to RMII/RGMII or can be set in
	  pass-through mode for MII.

endmenu

```
