---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/mellanox/mlxbf_gige/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only OR BSD-3-Clause
#
# Mellanox GigE driver configuration
#

config MLXBF_GIGE
	tristate "Mellanox Technologies BlueField Gigabit Ethernet support"
	depends on (ARM64 && ACPI) || COMPILE_TEST
	select PHYLIB
	help
	  The second generation BlueField SoC from Mellanox Technologies
	  supports an out-of-band Gigabit Ethernet management port to the
	  Arm subsystem.

```
