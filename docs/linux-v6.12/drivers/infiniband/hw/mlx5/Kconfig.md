---
sidebar_position: 21
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/mlx5/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MLX5_INFINIBAND
	tristate "Mellanox 5th generation network adapters (ConnectX series) support"
	depends on NETDEVICES && ETHERNET && PCI && MLX5_CORE
	help
	  This driver provides low-level InfiniBand support for
	  Mellanox Connect-IB PCI Express host channel adapters (HCAs).
	  This is required to use InfiniBand protocols such as
	  IP-over-IB or SRP with these devices.

```
