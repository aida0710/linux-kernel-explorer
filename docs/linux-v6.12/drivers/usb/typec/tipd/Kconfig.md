---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/usb/typec/tipd/Kconfig`

### コンテンツ

```txt
config TYPEC_TPS6598X
	tristate "TI TPS6598x USB Power Delivery controller driver"
	depends on I2C
	select POWER_SUPPLY
	select REGMAP_I2C
	select USB_ROLE_SWITCH
	help
	  Say Y or M here if your system has TI TPS65982 or TPS65983 USB Power
	  Delivery controller.

	  If you choose to build this driver as a dynamically linked module, the
	  module will be called tps6598x.ko.

```
