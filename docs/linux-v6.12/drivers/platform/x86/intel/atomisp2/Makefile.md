---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/atomisp2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Intel x86 Platform Specific Drivers
#

intel_atomisp2_led-y			:= led.o
obj-$(CONFIG_INTEL_ATOMISP2_LED)	+= intel_atomisp2_led.o
intel_atomisp2_pm-y			+= pm.o
obj-$(CONFIG_INTEL_ATOMISP2_PM)		+= intel_atomisp2_pm.o

```
