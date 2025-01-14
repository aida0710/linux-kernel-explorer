---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/misc/altera-stapl/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
comment "Altera FPGA firmware download module (requires I2C)"
	depends on !I2C

config ALTERA_STAPL
	tristate "Altera FPGA firmware download module"
	depends on I2C
	help
	  An Altera FPGA module. Say Y when you want to support this tool.

```
