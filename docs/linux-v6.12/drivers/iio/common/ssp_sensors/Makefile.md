---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/common/ssp_sensors/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for SSP sensor drivers and commons.
#

sensorhub-objs				:= ssp_dev.o ssp_spi.o
obj-$(CONFIG_IIO_SSP_SENSORHUB)		+= sensorhub.o

obj-$(CONFIG_IIO_SSP_SENSORS_COMMONS) 	+= ssp_iio.o

```
