---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/peci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

# Core functionality
peci-y := core.o request.o device.o sysfs.o
obj-$(CONFIG_PECI) += peci.o
peci-cpu-y := cpu.o
obj-$(CONFIG_PECI_CPU) += peci-cpu.o

# Hardware specific bus drivers
obj-y += controller/

```
