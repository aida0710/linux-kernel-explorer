---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/versatile/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# ARM Versatile SoC drivers
#
config SOC_INTEGRATOR_CM
	bool "SoC bus device for the ARM Integrator platform core modules"
	depends on ARCH_INTEGRATOR || COMPILE_TEST
	select SOC_BUS
	help
	  Include support for the SoC bus on the ARM Integrator platform
	  core modules providing some sysfs information about the ASIC
	  variant.

config SOC_REALVIEW
	bool "SoC bus device for the ARM RealView platforms"
	depends on ARCH_REALVIEW || COMPILE_TEST
	select SOC_BUS
	help
	  Include support for the SoC bus on the ARM RealView platforms
	  providing some sysfs information about the ASIC variant.

```
