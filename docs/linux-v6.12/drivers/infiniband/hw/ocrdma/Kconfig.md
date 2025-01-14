---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/ocrdma/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_OCRDMA
	tristate "Emulex One Connect HCA support"
	depends on ETHERNET && NETDEVICES && PCI && INET && (IPV6 || IPV6=n)
	select NET_VENDOR_EMULEX
	select BE2NET
	help
	  This driver provides low-level InfiniBand over Ethernet
	  support for Emulex One Connect host channel adapters (HCAs).

```
