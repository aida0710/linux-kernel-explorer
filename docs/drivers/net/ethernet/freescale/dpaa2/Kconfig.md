---
sidebar_position: 31
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/freescale/dpaa2/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config FSL_DPAA2_ETH
	tristate "Freescale DPAA2 Ethernet"
	depends on FSL_MC_BUS && FSL_MC_DPIO
	select PHYLINK
	select PCS_LYNX
	select FSL_XGMAC_MDIO
	select NET_DEVLINK
	help
	  This is the DPAA2 Ethernet driver supporting Freescale SoCs
	  with DPAA2 (DataPath Acceleration Architecture v2).
	  The driver manages network objects discovered on the Freescale
	  MC bus.

if FSL_DPAA2_ETH
config FSL_DPAA2_ETH_DCB
	bool "Data Center Bridging (DCB) Support"
	default n
	depends on DCB
	help
	  Enable Priority-Based Flow Control (PFC) support for DPAA2 Ethernet
	  devices.
endif

config FSL_DPAA2_PTP_CLOCK
	tristate "Freescale DPAA2 PTP Clock"
	depends on FSL_DPAA2_ETH && PTP_1588_CLOCK_QORIQ
	default y
	help
	  This driver adds support for using the DPAA2 1588 timer module
	  as a PTP clock.

config FSL_DPAA2_SWITCH
	tristate "Freescale DPAA2 Ethernet Switch"
	depends on BRIDGE || BRIDGE=n
	depends on NET_SWITCHDEV
	help
	  Driver for Freescale DPAA2 Ethernet Switch. This driver manages
	  switch objects discovered on the Freeescale MC bus.

```
