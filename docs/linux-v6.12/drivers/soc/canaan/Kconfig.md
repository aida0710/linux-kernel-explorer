---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/canaan/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config SOC_K210_SYSCTL
	bool "Canaan Kendryte K210 SoC system controller"
	depends on RISCV && SOC_CANAAN_K210 && OF
	depends on COMMON_CLK_K210
	default SOC_CANAAN_K210
	select PM
	select MFD_SYSCON
	help
	  Canaan Kendryte K210 SoC system controller driver.

```
