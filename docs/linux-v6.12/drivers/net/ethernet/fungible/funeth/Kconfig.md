---
sidebar_position: 13
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/fungible/funeth/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Fungible Ethernet driver configuration
#

config FUN_ETH
	tristate "Fungible Ethernet device driver"
	depends on PCI_MSI
	depends on TLS && TLS_DEVICE || TLS_DEVICE=n
	select NET_DEVLINK
	select FUN_CORE
	help
	  This driver supports the Ethernet functionality of Fungible adapters.
	  It works with both physical and virtual functions.

	  To compile this driver as a module, choose M here. The module
          will be called funeth.

```
