---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/freescale/dpaa/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig FSL_DPAA_ETH
	tristate "DPAA Ethernet"
	depends on FSL_DPAA && FSL_FMAN
	select PHYLINK
	select PCS_LYNX
	help
	  Data Path Acceleration Architecture Ethernet driver,
	  supporting the Freescale QorIQ chips.
	  Depends on Freescale Buffer Manager and Queue Manager
	  driver and Frame Manager Driver.

```
