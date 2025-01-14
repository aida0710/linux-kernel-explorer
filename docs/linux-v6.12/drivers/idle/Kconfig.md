---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/idle/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INTEL_IDLE
	bool "Cpuidle Driver for Intel Processors"
	depends on CPU_IDLE
	depends on X86
	depends on CPU_SUP_INTEL
	help
	  Enable intel_idle, a cpuidle driver that includes knowledge of
	  native Intel hardware idle features.  The acpi_idle driver
	  can be configured at the same time, in order to handle
	  processors intel_idle does not support.

```
