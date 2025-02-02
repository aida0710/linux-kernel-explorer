---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/intel/iwlegacy/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config IWLEGACY
	tristate
	select FW_LOADER
	select LEDS_TRIGGERS
	select MAC80211_LEDS

config IWL4965
	tristate "Intel Wireless WiFi 4965AGN (iwl4965)"
	depends on PCI && MAC80211
	depends on LEDS_CLASS=y || LEDS_CLASS=MAC80211
	select IWLEGACY
	help
	  This option enables support for

	  Select to build the driver supporting the:

	  Intel Wireless WiFi Link 4965AGN

	  This driver uses the kernel's mac80211 subsystem.

	  In order to use this driver, you will need a microcode (uCode)
	  image for it. You can obtain the microcode from:

	          <http://intellinuxwireless.org/>.

	  The microcode is typically installed in /lib/firmware. You can
	  look in the hotplug script /etc/hotplug/firmware.agent to
	  determine which directory FIRMWARE_DIR is set to when the script
	  runs.

	  If you want to compile the driver as a module ( = code which can be
	  inserted in and removed from the running kernel whenever you want),
	  say M here and read <file:Documentation/kbuild/modules.rst>.  The
	  module will be called iwl4965.

config IWL3945
	tristate "Intel PRO/Wireless 3945ABG/BG Network Connection (iwl3945)"
	depends on PCI && MAC80211
	depends on LEDS_CLASS=y || LEDS_CLASS=MAC80211
	select IWLEGACY
	help
	  Select to build the driver supporting the:

	  Intel PRO/Wireless 3945ABG/BG Network Connection

	  This driver uses the kernel's mac80211 subsystem.

	  In order to use this driver, you will need a microcode (uCode)
	  image for it. You can obtain the microcode from:

	          <http://intellinuxwireless.org/>.

	  The microcode is typically installed in /lib/firmware. You can
	  look in the hotplug script /etc/hotplug/firmware.agent to
	  determine which directory FIRMWARE_DIR is set to when the script
	  runs.

	  If you want to compile the driver as a module ( = code which can be
	  inserted in and removed from the running kernel whenever you want),
	  say M here and read <file:Documentation/kbuild/modules.rst>.  The
	  module will be called iwl3945.

menu "iwl3945 / iwl4965 Debugging Options"
	depends on IWLEGACY

config IWLEGACY_DEBUG
	bool "Enable full debugging output in iwlegacy (iwl 3945/4965) drivers"
	depends on IWLEGACY
	help
	  This option will enable debug tracing output for the iwlegacy
	  drivers.

	  This will result in the kernel module being ~100k larger.  You can
	  control which debug output is sent to the kernel log by setting the
	  value in

		/sys/class/net/wlan0/device/debug_level

	  This entry will only exist if this option is enabled.

	  To set a value, simply echo an 8-byte hex value to the same file:

		  % echo 0x43fff > /sys/class/net/wlan0/device/debug_level

	  You can find the list of debug mask values in:
		  drivers/net/wireless/iwlegacy/common.h

	  If this is your first time using this driver, you should say Y here
	  as the debug information can assist others in helping you resolve
	  any problems you may encounter.

config IWLEGACY_DEBUGFS
	bool "iwlegacy (iwl 3945/4965) debugfs support"
	depends on IWLEGACY && MAC80211_DEBUGFS
	help
	  Enable creation of debugfs files for the iwlegacy drivers. This
	  is a low-impact option that allows getting insight into the
	  driver's state at runtime.

endmenu

```
