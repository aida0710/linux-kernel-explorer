---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/tegra/cbb/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Control Backbone Driver code.
#
ifdef CONFIG_SOC_TEGRA_CBB
obj-y += tegra-cbb.o
obj-$(CONFIG_ARCH_TEGRA_194_SOC) += tegra194-cbb.o
obj-$(CONFIG_ARCH_TEGRA_234_SOC) += tegra234-cbb.o
endif

```
