---
sidebar_position: 11
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/bnx2fc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SCSI_BNX2X_FCOE
	tristate "QLogic FCoE offload support"
	depends on PCI
	depends on (IPV6 || IPV6=n)
	depends on LIBFC
	depends on LIBFCOE
	depends on MMU
	select NETDEVICES
	select ETHERNET
	select NET_VENDOR_BROADCOM
	select CNIC
	help
	This driver supports FCoE offload for the QLogic devices.

```
