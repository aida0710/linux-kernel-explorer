---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/lis3lv02d/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# STMicroelectonics LIS3LV02D and similar accelerometers
#

obj-$(CONFIG_SENSORS_LIS3LV02D) += lis3lv02d.o
obj-$(CONFIG_SENSORS_LIS3_SPI)	+= lis3lv02d_spi.o
obj-$(CONFIG_SENSORS_LIS3_I2C)	+= lis3lv02d_i2c.o

```
