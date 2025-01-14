---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/nfc/nxp-nci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for NXP-NCI NFC driver
#

nxp-nci-objs = core.o firmware.o
nxp-nci_i2c-objs = i2c.o

obj-$(CONFIG_NFC_NXP_NCI) += nxp-nci.o
obj-$(CONFIG_NFC_NXP_NCI_I2C) += nxp-nci_i2c.o

```
