---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `net/nfc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# NFC subsystem configuration
#

menuconfig NFC
	depends on RFKILL || !RFKILL
	tristate "NFC subsystem support"
	default n
	help
	  Say Y here if you want to build support for NFC (Near field
	  communication) devices.

	  To compile this support as a module, choose M here: the module will
	  be called nfc.

config NFC_DIGITAL
	depends on NFC
	select CRC_CCITT
	select CRC_ITU_T
	tristate "NFC Digital Protocol stack support"
	default n
	help
	  Say Y if you want to build NFC digital protocol stack support.
	  This is needed by NFC chipsets whose firmware only implement
	  the NFC analog layer.

	  To compile this support as a module, choose M here: the module will
	  be called nfc_digital.

source "net/nfc/nci/Kconfig"
source "net/nfc/hci/Kconfig"

source "drivers/nfc/Kconfig"

```
