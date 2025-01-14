---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/clk/zynqmp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config COMMON_CLK_ZYNQMP
	bool "Support for Xilinx ZynqMP Ultrascale+ clock controllers"
	depends on ZYNQMP_FIRMWARE || COMPILE_TEST
	default ZYNQMP_FIRMWARE
	help
	  Support for the Zynqmp Ultrascale clock controller.
	  It has a dependency on the PMU firmware.
	  Say Y if you want to include clock support.

```
