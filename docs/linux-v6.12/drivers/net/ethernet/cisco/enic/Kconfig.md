---
sidebar_position: 16
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/cisco/enic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Cisco device configuration
#

config ENIC
	tristate "Cisco VIC Ethernet NIC Support"
	depends on PCI
	help
	  This enables the support for the Cisco VIC Ethernet card.

```
