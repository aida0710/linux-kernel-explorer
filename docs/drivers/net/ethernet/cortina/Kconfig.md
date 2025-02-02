---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/cortina/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Cortina ethernet devices

config NET_VENDOR_CORTINA
	bool "Cortina Gemini devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y
	  and read the Ethernet-HOWTO, available from
	  <https://www.tldp.org/docs.html#howto>.

if NET_VENDOR_CORTINA

config GEMINI_ETHERNET
	tristate "Gemini Gigabit Ethernet support"
	depends on OF
	depends on HAS_IOMEM
	select PHYLIB
	select CRC32
	help
	  This driver supports StorLink SL351x (Gemini) dual Gigabit Ethernet.

endif # NET_VENDOR_CORTINA

```
