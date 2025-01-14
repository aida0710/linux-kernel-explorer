---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/iio/common/st_sensors/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# STMicroelectronics sensors common library
#

config IIO_ST_SENSORS_I2C
	tristate
	select REGMAP_I2C

config IIO_ST_SENSORS_SPI
	tristate
	select REGMAP_SPI

config IIO_ST_SENSORS_CORE
	tristate

```
