---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/dsa/qca/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_DSA_AR9331
	tristate "Qualcomm Atheros AR9331 Ethernet switch support"
	depends on NET_DSA
	select NET_DSA_TAG_AR9331
	select REGMAP
	help
	  This enables support for the Qualcomm Atheros AR9331 built-in Ethernet
	  switch.

config NET_DSA_QCA8K
	tristate "Qualcomm Atheros QCA8K Ethernet switch family support"
	select NET_DSA_TAG_QCA
	select REGMAP
	help
	  This enables support for the Qualcomm Atheros QCA8K Ethernet
	  switch chips.

config NET_DSA_QCA8K_LEDS_SUPPORT
	bool "Qualcomm Atheros QCA8K Ethernet switch family LEDs support"
	depends on NET_DSA_QCA8K
	depends on LEDS_CLASS=y || LEDS_CLASS=NET_DSA_QCA8K
	depends on LEDS_TRIGGERS
	help
	  This enabled support for LEDs present on the Qualcomm Atheros
	  QCA8K Ethernet switch chips.

```
