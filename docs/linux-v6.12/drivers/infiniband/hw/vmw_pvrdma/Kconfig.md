---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/vmw_pvrdma/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_VMWARE_PVRDMA
	tristate "VMware Paravirtualized RDMA Driver"
	depends on NETDEVICES && ETHERNET && PCI && INET && VMXNET3
	help
	  This driver provides low-level support for VMware Paravirtual
	  RDMA adapter. It interacts with the VMXNet3 driver to provide
	  Ethernet capabilities.

```
