---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/apm/xgene/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_XGENE
	tristate "APM X-Gene SoC Ethernet Driver"
	depends on ARCH_XGENE || COMPILE_TEST
	select PHYLIB
	select MDIO_XGENE
	select GPIOLIB
	help
	  This is the Ethernet driver for the on-chip ethernet interface on the
	  APM X-Gene SoC.

	  To compile this driver as a module, choose M here. This module will
	  be called xgene_enet.

```
