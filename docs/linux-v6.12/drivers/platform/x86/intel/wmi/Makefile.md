---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/wmi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Intel x86 Platform Specific Drivers
#

intel-wmi-sbl-fw-update-y				:= sbl-fw-update.o
obj-$(CONFIG_INTEL_WMI_SBL_FW_UPDATE)	+= intel-wmi-sbl-fw-update.o
intel-wmi-thunderbolt-y					:= thunderbolt.o
obj-$(CONFIG_INTEL_WMI_THUNDERBOLT)	+= intel-wmi-thunderbolt.o

```
