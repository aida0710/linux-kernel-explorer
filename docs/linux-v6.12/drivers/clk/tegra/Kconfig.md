---
sidebar_position: 34
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/clk/tegra/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CLK_TEGRA_BPMP
	def_bool y
	depends on TEGRA_BPMP

config TEGRA_CLK_DFLL
	depends on ARCH_TEGRA_124_SOC || ARCH_TEGRA_210_SOC
	select PM_OPP
	def_bool y

config TEGRA124_CLK_EMC
	bool

```
