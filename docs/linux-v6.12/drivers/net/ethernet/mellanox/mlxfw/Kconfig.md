---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/mellanox/mlxfw/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Mellanox firmware flash library configuration
#

config MLXFW
	tristate "Mellanox Technologies firmware flash module"
	help
	  This driver supports Mellanox Technologies Firmware
	  flashing common logic.

	  To compile this driver as a module, choose M here: the
	  module will be called mlxfw.
	select XZ_DEC
	select NET_DEVLINK

```
