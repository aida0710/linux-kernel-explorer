---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hwmon/peci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

peci-cputemp-y := cputemp.o
peci-dimmtemp-y := dimmtemp.o

obj-$(CONFIG_SENSORS_PECI_CPUTEMP)	+= peci-cputemp.o
obj-$(CONFIG_SENSORS_PECI_DIMMTEMP)	+= peci-dimmtemp.o

```
