---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/imu/bmi160/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Bosch BMI160 IMU
#
obj-$(CONFIG_BMI160) += bmi160_core.o
obj-$(CONFIG_BMI160_I2C) += bmi160_i2c.o
obj-$(CONFIG_BMI160_SPI) += bmi160_spi.o

```
