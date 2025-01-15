---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/qualcomm/rmnet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# RMNET MAP driver
#

menuconfig RMNET
	tristate "RmNet MAP driver"
	default n
	select GRO_CELLS
	help
	  If you select this, you will enable the RMNET module which is used
	  for handling data in the multiplexing and aggregation protocol (MAP)
	  format in the embedded data path. RMNET devices can be attached to
	  any IP mode physical device.

```
