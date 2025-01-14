---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pinctrl/sprd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Spreadtrum pin control drivers
#

config PINCTRL_SPRD
	tristate
	select PINMUX
	select PINCONF
	select GENERIC_PINCONF
	select GENERIC_PINMUX_FUNCTIONS
	help
	  Say Y here to enable Spreadtrum pinctrl driver

config PINCTRL_SPRD_SC9860
	tristate "Spreadtrum SC9860 pinctrl driver"
	depends on OF
	depends on ARCH_SPRD || COMPILE_TEST
	select PINCTRL_SPRD
	help
	  Say Y here to enable Spreadtrum SC9860 pinctrl driver

```
