---
sidebar_position: 11
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ath/carl9170/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CARL9170
	tristate "Linux Community AR9170 802.11n USB support"
	depends on USB && MAC80211
	select ATH_COMMON
	select FW_LOADER
	select CRC32
	help
	  This is the mainline driver for the Atheros "otus" 802.11n USB devices.

	  It needs a special firmware (carl9170-1.fw), which can be downloaded
	  from our wiki here:
	  <https://wireless.wiki.kernel.org/en/users/Drivers/carl9170>

	  If you choose to build a module, it'll be called carl9170.

config CARL9170_LEDS
	bool "SoftLED Support"
	default y
	depends on CARL9170
	depends on MAC80211_LEDS
	help
	  This option is necessary, if you want your device's LEDs to blink.

	  Say Y, unless you need the LEDs for firmware debugging.

config CARL9170_DEBUGFS
	bool "DebugFS Support"
	depends on CARL9170 && DEBUG_FS && MAC80211_DEBUGFS
	default n
	help
	  Export several driver and device internals to user space.

	  Say N.

config CARL9170_WPC
	bool
	depends on CARL9170 && (INPUT = y || INPUT = CARL9170)
	default y

config CARL9170_HWRNG
	bool "Random number generator"
	depends on CARL9170 && (HW_RANDOM = y || HW_RANDOM = CARL9170)
	default n
	help
	  Provides a hardware random number generator to the kernel.

	  SECURITY WARNING: It's relatively easy to eavesdrop all
	  generated random numbers from the transport stream with
	  usbmon [software] or special usb sniffer hardware.

	  Say N, unless your setup[i.e.: embedded system] has no
	  other rng source and you can afford to take the risk.

```
