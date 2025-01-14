---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/nfc/st95hf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NFC_ST95HF
	tristate "ST95HF NFC Transceiver driver"
	depends on SPI && NFC_DIGITAL
	help
	This enables the ST NFC driver for ST95HF NFC transceiver.
	This makes use of SPI framework to communicate with transceiver
	and registered with NFC digital core to support Linux NFC framework.

	Say Y here to compile support for ST NFC transceiver ST95HF
	linux driver into the kernel or say M to compile it as module.

```
