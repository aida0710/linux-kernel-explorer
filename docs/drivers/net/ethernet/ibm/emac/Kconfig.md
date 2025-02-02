---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/ibm/emac/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config IBM_EMAC
	tristate "IBM EMAC Ethernet support"
	depends on PPC_DCR
	select CRC32
	select PHYLIB
	help
	  This driver supports the IBM EMAC family of Ethernet controllers
	  typically found on 4xx embedded PowerPC chips, but also on the
	  Axon southbridge for Cell.

config IBM_EMAC_RXB
	int "Number of receive buffers"
	depends on IBM_EMAC
	default "128"

config IBM_EMAC_TXB
	int "Number of transmit buffers"
	depends on IBM_EMAC
	default "64"

config IBM_EMAC_POLL_WEIGHT
	int "MAL NAPI polling weight"
	depends on IBM_EMAC
	default "32"

config IBM_EMAC_RX_COPY_THRESHOLD
	int "RX skb copy threshold (bytes)"
	depends on IBM_EMAC
	default "256"

config IBM_EMAC_DEBUG
	bool "Debugging"
	depends on IBM_EMAC
	default n

# The options below has to be select'ed by the respective
# processor types or platforms

config IBM_EMAC_ZMII
	bool
	default n

config IBM_EMAC_RGMII
	bool
	default n

config IBM_EMAC_TAH
	bool
	default n

config IBM_EMAC_EMAC4
	bool
	default n

config IBM_EMAC_NO_FLOW_CTRL
	bool
	default n

config IBM_EMAC_MAL_CLR_ICINTSTAT
	bool
	default n

config IBM_EMAC_MAL_COMMON_ERR
	bool
	default n

```
