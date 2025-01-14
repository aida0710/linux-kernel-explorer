---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/telemetry/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Intel x86 Platform Specific Drivers
#

intel_telemetry_core-y			:= core.o
obj-$(CONFIG_INTEL_TELEMETRY)		+= intel_telemetry_core.o
intel_telemetry_pltdrv-y		:= pltdrv.o
obj-$(CONFIG_INTEL_TELEMETRY)		+= intel_telemetry_pltdrv.o
intel_telemetry_debugfs-y		:= debugfs.o
obj-$(CONFIG_INTEL_TELEMETRY)		+= intel_telemetry_debugfs.o

```
