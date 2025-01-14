---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/nfc/pn544/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for PN544 HCI based NFC driver
#

pn544_i2c-objs  = i2c.o
pn544_mei-objs  = mei.o

obj-$(CONFIG_NFC_PN544)     += pn544.o
obj-$(CONFIG_NFC_PN544_I2C) += pn544_i2c.o
obj-$(CONFIG_NFC_PN544_MEI) += pn544_mei.o

```
