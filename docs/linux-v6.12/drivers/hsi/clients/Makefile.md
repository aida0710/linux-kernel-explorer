---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hsi/clients/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for HSI clients
#

obj-$(CONFIG_NOKIA_MODEM)	+= nokia-modem.o
obj-$(CONFIG_SSI_PROTOCOL)	+= ssi_protocol.o
obj-$(CONFIG_CMT_SPEECH)	+= cmt_speech.o
obj-$(CONFIG_HSI_CHAR)		+= hsi_char.o

```
