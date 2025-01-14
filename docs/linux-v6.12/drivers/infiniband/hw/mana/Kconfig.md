---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/mana/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MANA_INFINIBAND
	tristate "Microsoft Azure Network Adapter support"
	depends on NETDEVICES && ETHERNET && PCI && MICROSOFT_MANA
	help
	  This driver provides low-level RDMA support for Microsoft Azure
	  Network Adapter (MANA). MANA supports RDMA features that can be used
	  for workloads (e.g. DPDK, MPI etc) that uses RDMA verbs to directly
	  access hardware from user-mode processes in Microsoft Azure cloud
	  environment.

```
