---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/st/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_ST_THERMAL)		:= st_thermal.o
obj-$(CONFIG_ST_THERMAL_MEMMAP)		+= st_thermal_memmap.o
obj-$(CONFIG_STM32_THERMAL)		+= stm_thermal.o

```
