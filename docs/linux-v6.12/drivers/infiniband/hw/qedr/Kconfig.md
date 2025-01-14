---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/qedr/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_QEDR
	tristate "QLogic RoCE driver"
	depends on 64BIT && QEDE
	depends on PCI
	select QED_LL2
	select QED_OOO
	select QED_RDMA
	help
	  This driver provides low-level InfiniBand over Ethernet
	  support for QLogic QED host channel adapters (HCAs).

```
