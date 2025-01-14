---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/mlx4/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MLX4_INFINIBAND
	tristate "Mellanox ConnectX HCA support"
	depends on NETDEVICES && ETHERNET && PCI && INET
	select NET_VENDOR_MELLANOX
	select MLX4_CORE
	help
	  This driver provides low-level InfiniBand support for
	  Mellanox ConnectX PCI Express host channel adapters (HCAs).
	  This is required to use InfiniBand protocols such as
	  IP-over-IB or SRP with these devices.

```
