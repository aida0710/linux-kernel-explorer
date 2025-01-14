---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hwmon/occ/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
occ-hwmon-common-objs := common.o sysfs.o
occ-p8-hwmon-objs := p8_i2c.o
occ-p9-hwmon-objs := p9_sbe.o

obj-$(CONFIG_SENSORS_OCC) += occ-hwmon-common.o
obj-$(CONFIG_SENSORS_OCC_P8_I2C) += occ-p8-hwmon.o
obj-$(CONFIG_SENSORS_OCC_P9_SBE) += occ-p9-hwmon.o

```
