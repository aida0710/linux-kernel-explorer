---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/usnic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_USNIC
	tristate "Verbs support for Cisco VIC"
	depends on NETDEVICES && ETHERNET && INET && PCI && INTEL_IOMMU
	depends on INFINIBAND_USER_ACCESS
	select ENIC
	select NET_VENDOR_CISCO
	select PCI_IOV
	help
	  This is a low-level driver for Cisco's Virtual Interface
	  Cards (VICs), including the VIC 1240 and 1280 cards.

```
