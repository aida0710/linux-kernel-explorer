---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/interconnect/imx/Kconfig`

### コンテンツ

```txt
config INTERCONNECT_IMX
	tristate "i.MX interconnect drivers"
	depends on ARCH_MXC || COMPILE_TEST
	help
	  Generic interconnect drivers for i.MX SOCs

config INTERCONNECT_IMX8MM
	tristate "i.MX8MM interconnect driver"
	depends on INTERCONNECT_IMX

config INTERCONNECT_IMX8MN
	tristate "i.MX8MN interconnect driver"
	depends on INTERCONNECT_IMX

config INTERCONNECT_IMX8MQ
	tristate "i.MX8MQ interconnect driver"
	depends on INTERCONNECT_IMX

config INTERCONNECT_IMX8MP
	tristate "i.MX8MP interconnect driver"
	depends on INTERCONNECT_IMX

```
