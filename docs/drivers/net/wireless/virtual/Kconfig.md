---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/virtual/Kconfig`

### コンテンツ

```txt
config MAC80211_HWSIM
	tristate "Simulated radio testing tool for mac80211"
	depends on MAC80211
	help
	  This driver is a developer testing tool that can be used to test
	  IEEE 802.11 networking stack (mac80211) functionality. This is not
	  needed for normal wireless LAN usage and is only for testing. See
	  Documentation/networking/mac80211_hwsim for more information on how
	  to use this tool.

	  To compile this driver as a module, choose M here: the module will be
	  called mac80211_hwsim.  If unsure, say N.

config VIRT_WIFI
	tristate "Wifi wrapper for ethernet drivers"
	depends on CFG80211
	help
	  This option adds support for ethernet connections to appear as if they
	  are wifi connections through a special rtnetlink device.


```
