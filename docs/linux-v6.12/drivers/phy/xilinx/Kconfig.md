---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/phy/xilinx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

#
# PHY drivers for Xilinx platforms
#

config PHY_XILINX_ZYNQMP
	tristate "Xilinx ZynqMP PHY driver"
	depends on ARCH_ZYNQMP || COMPILE_TEST
	select GENERIC_PHY
	help
	  Enable this to support ZynqMP High Speed Gigabit Transceiver
	  that is part of ZynqMP SoC.

```
