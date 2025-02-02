---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/ncsi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Configuration for NCSI support
#

config NET_NCSI
	bool "NCSI interface support"
	depends on INET
	help
	  This module provides NCSI (Network Controller Sideband Interface)
	  support. Enable this only if your system connects to a network
	  device via NCSI and the ethernet driver you're using supports
	  the protocol explicitly.
config NCSI_OEM_CMD_GET_MAC
	bool "Get NCSI OEM MAC Address"
	depends on NET_NCSI
	help
	  This allows to get MAC address from NCSI firmware and set them back to
		controller.
config NCSI_OEM_CMD_KEEP_PHY
	bool "Keep PHY Link up"
	depends on NET_NCSI
	help
	  This allows to keep PHY link up and prevents any channel resets during
	  the host load.

```
