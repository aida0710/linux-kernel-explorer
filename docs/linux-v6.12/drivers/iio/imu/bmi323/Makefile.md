---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/imu/bmi323/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Bosch BMI323 IMU
#
obj-$(CONFIG_BMI323) += bmi323_core.o
obj-$(CONFIG_BMI323_I2C) += bmi323_i2c.o
obj-$(CONFIG_BMI323_SPI) += bmi323_spi.o

```
