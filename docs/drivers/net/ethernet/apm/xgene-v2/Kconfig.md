---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/apm/xgene-v2/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_XGENE_V2
	tristate "APM X-Gene SoC Ethernet-v2 Driver"
	depends on ARCH_XGENE || COMPILE_TEST
	help
	  This is the Ethernet driver for the on-chip ethernet interface
	  which uses a linked list of DMA descriptor architecture (v2) for
	  APM X-Gene SoCs.

	  To compile this driver as a module, choose M here. This module will
	  be called xgene-enet-v2.

```
