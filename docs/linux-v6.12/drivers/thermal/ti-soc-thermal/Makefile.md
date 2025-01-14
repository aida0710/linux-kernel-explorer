---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/ti-soc-thermal/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_TI_SOC_THERMAL)		+= ti-soc-thermal.o
ti-soc-thermal-y			:= ti-bandgap.o
ti-soc-thermal-$(CONFIG_TI_THERMAL)	+= ti-thermal-common.o
ti-soc-thermal-$(CONFIG_DRA752_THERMAL)	+= dra752-thermal-data.o
ti-soc-thermal-$(CONFIG_OMAP3_THERMAL)	+= omap3-thermal-data.o
ti-soc-thermal-$(CONFIG_OMAP4_THERMAL)	+= omap4-thermal-data.o
ti-soc-thermal-$(CONFIG_OMAP5_THERMAL)	+= omap5-thermal-data.o

```
