---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/thunderbolt/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB4_NET
	tristate "Networking over USB4 and Thunderbolt cables"
	depends on USB4 && INET
	help
	  Select this if you want to create network between two computers
	  over a USB4 and Thunderbolt cables. The driver supports Apple
	  ThunderboltIP protocol and allows communication with any host
	  supporting the same protocol including Windows and macOS.

	  To compile this driver a module, choose M here. The module will be
	  called thunderbolt_net.

```
