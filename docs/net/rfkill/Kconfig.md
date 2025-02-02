---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/rfkill/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# RF switch subsystem configuration
#
menuconfig RFKILL
	tristate "RF switch subsystem support"
	help
	  Say Y here if you want to have control over RF switches
	  found on many WiFi and Bluetooth cards.

	  To compile this driver as a module, choose M here: the
	  module will be called rfkill.

# LED trigger support
config RFKILL_LEDS
	bool
	depends on RFKILL
	depends on LEDS_TRIGGERS = y || RFKILL = LEDS_TRIGGERS
	default y

config RFKILL_INPUT
	bool "RF switch input support" if EXPERT
	depends on RFKILL
	depends on INPUT = y || RFKILL = INPUT
	default y if !EXPERT

config RFKILL_GPIO
	tristate "GPIO RFKILL driver"
	depends on RFKILL
	depends on GPIOLIB || COMPILE_TEST
	default n
	help
	  If you say yes here you get support of a generic gpio RFKILL
	  driver.

```
