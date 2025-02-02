---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/fungible/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Fungible network driver configuration
#

config NET_VENDOR_FUNGIBLE
	bool "Fungible devices"
	default y
	help
	  If you have a Fungible network device, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Fungible cards. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_FUNGIBLE

config FUN_CORE
	tristate
	select SBITMAP
	help
	  A service module offering basic common services to Fungible
	  device drivers.

source "drivers/net/ethernet/fungible/funeth/Kconfig"

endif # NET_VENDOR_FUNGIBLE

```
