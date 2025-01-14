---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/testing/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Thermal core testing facility.

obj-$(CONFIG_THERMAL_CORE_TESTING) += thermal-testing.o

thermal-testing-y := command.o zone.o

```
