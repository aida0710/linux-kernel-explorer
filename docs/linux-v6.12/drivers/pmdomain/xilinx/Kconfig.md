---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pmdomain/xilinx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config ZYNQMP_PM_DOMAINS
	bool "Enable Zynq MPSoC generic PM domains"
	default y
	depends on PM && ZYNQMP_FIRMWARE
	select PM_GENERIC_DOMAINS
	help
	  Say yes to enable device power management through PM domains
	  If in doubt, say N.

```
