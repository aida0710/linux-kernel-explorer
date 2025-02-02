---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/nfc/nci/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NFC_NCI
	depends on NFC
	tristate "NCI protocol support"
	default n
	help
	  NCI (NFC Controller Interface) is a communication protocol between
	  an NFC Controller (NFCC) and a Device Host (DH).

	  Say Y here to compile NCI support into the kernel or say M to
	  compile it as module (nci).

config NFC_NCI_SPI
	depends on NFC_NCI && SPI
	select CRC_CCITT
	tristate "NCI over SPI protocol support"
	default n
	help
	  NCI (NFC Controller Interface) is a communication protocol between
	  an NFC Controller (NFCC) and a Device Host (DH).

	  Say yes if you use an NCI driver that requires SPI link layer.

config NFC_NCI_UART
	depends on NFC_NCI && TTY
	tristate "NCI over UART protocol support"
	default n
	help
	  Say yes if you use an NCI driver that requires UART link layer.

```
