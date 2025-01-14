---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/most/i2c/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# MOST I2C configuration
#

config MOST_I2C
	tristate "I2C"
	depends on I2C
	help
	  Say Y here if you want to connect via I2C to network transceiver.

	  To compile this driver as a module, choose M here: the
	  module will be called most_i2c.

```
