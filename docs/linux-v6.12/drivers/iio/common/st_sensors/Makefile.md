---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/common/st_sensors/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the STMicroelectronics sensor common modules.
#

obj-$(CONFIG_IIO_ST_SENSORS_I2C) += st_sensors_i2c.o
obj-$(CONFIG_IIO_ST_SENSORS_SPI) += st_sensors_spi.o
obj-$(CONFIG_IIO_ST_SENSORS_CORE) += st_sensors.o
st_sensors-y := st_sensors_core.o
st_sensors-$(CONFIG_IIO_BUFFER) += st_sensors_buffer.o
st_sensors-$(CONFIG_IIO_TRIGGER) += st_sensors_trigger.o

```
