---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/mellanox/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Mellanox driver configuration
#

config NET_VENDOR_MELLANOX
	bool "Mellanox devices"
	default y
	depends on PCI || I2C
	help
	  If you have a network (Ethernet or RDMA) device belonging to this
	  class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Mellanox cards. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_MELLANOX

source "drivers/net/ethernet/mellanox/mlx4/Kconfig"
source "drivers/net/ethernet/mellanox/mlx5/core/Kconfig"
source "drivers/net/ethernet/mellanox/mlxsw/Kconfig"
source "drivers/net/ethernet/mellanox/mlxfw/Kconfig"
source "drivers/net/ethernet/mellanox/mlxbf_gige/Kconfig"

endif # NET_VENDOR_MELLANOX

```
