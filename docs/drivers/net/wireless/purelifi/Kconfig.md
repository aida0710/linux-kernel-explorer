---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/purelifi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WLAN_VENDOR_PURELIFI
	bool "pureLiFi devices"
	default y
	help
	  If you have a pureLiFi device, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about these cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if WLAN_VENDOR_PURELIFI

source "drivers/net/wireless/purelifi/plfxlc/Kconfig"

endif # WLAN_VENDOR_PURELIFI

```
